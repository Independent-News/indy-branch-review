import { hydrateComponent } from '@indy/archipelago/bootstrap';

import { COOKIE_SUBSCRIBER } from '#app/constants/cookies';

import { CLASS_PREMIUM_MENU } from '#app/constants/classNames';

import { getCookie } from '#app/public/js/utils/cookie';

import Wrapper from '#app/component/library/Hydration/IndyClientIslandWrapper';
import isHydrationRootElementType from '#app/component/library/Hydration/isHydrationRootElementType';
import NewsletterGroups from '#app/component/library/StaticPage/Premium/NewsletterGroups';
import PremiumMenuDropdown from '#app/component/library/StaticPage/Premium/PremiumMenuDropdown';
import NewsletterPreferencesContent from '#app/component/pages/NewsletterPreferences/NewsletterPreferencesContent';

import { InternalApi } from './utils/internalApi';

import type { Bookmark, StoredBookmarks } from '#types/bookmarks';

const premiumDropdownRoot = document.querySelector(
  '[data-component=PremiumMenuDropdown]',
);
// TODO: Remove after the new newsletter design is go live
const newsletterGroupsRoot = document.querySelector(
  '[data-component=NewsletterGroups]',
);
const newsletterPreferencesContentRoot = document.querySelector(
  '[data-component=NewsletterPreferencesContent]',
);
if (isHydrationRootElementType(premiumDropdownRoot)) {
  hydrateComponent(premiumDropdownRoot, { PremiumMenuDropdown }, { Wrapper });
}
// TODO: Remove after the new newsletter design is go live
if (isHydrationRootElementType(newsletterGroupsRoot)) {
  hydrateComponent(newsletterGroupsRoot, { NewsletterGroups }, { Wrapper });
}

if (isHydrationRootElementType(newsletterPreferencesContentRoot)) {
  hydrateComponent(
    newsletterPreferencesContentRoot,
    { NewsletterPreferencesContent },
    { Wrapper },
  );
}
const bookmarkWrapper = document.querySelector('section[data-tab="bookmarks"]');

const imgObserver = new IntersectionObserver(
  (items) => {
    const intersectingItems = items.filter((item) => item.isIntersecting);
    intersectingItems.forEach((img) => {
      const lazyImage = img.target;
      if (lazyImage instanceof HTMLImageElement) {
        lazyImage.src = lazyImage.dataset.src ?? '';
        imgObserver.unobserve(lazyImage);
      }
    });
  },
  { rootMargin: '150px' },
);

const imgs = document.querySelectorAll('img[data-src]');
imgs.forEach((img) => imgObserver.observe(img));

const removeBookmarkLocalStorage = (articleId: string) => {
  const previousBookmarks = localStorage.getItem('premiumBookmarks');
  const bookmarksToUse: string[] = previousBookmarks
    ? JSON.parse(previousBookmarks)
    : [];
  const updatedBookmarks = bookmarksToUse.filter((a) => a !== articleId);
  localStorage.setItem('premiumBookmarks', JSON.stringify(updatedBookmarks));
};

const deleteBookmark = (button: HTMLButtonElement) => {
  if (button.disabled) {
    return;
  }
  button.disabled = true;
  const articleId = button.dataset.id ?? '';
  InternalApi.delete(`bookmarks/${articleId}`)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error('Network response was not ok.');
    })
    .then(() => {
      removeBookmarkLocalStorage(articleId);
      button.closest('.bookmark-template')?.remove();
    })
    .catch((error) => {
      button.disabled = false;
      console.error('Fetch failed: ', error.message);
    });
};

const createBookmarkItem = (bookmark: Bookmark) => {
  const bookmarkTemplate = bookmarkWrapper
    ?.querySelector('.bookmark-template')
    ?.cloneNode(true);
  const isBookmarkTemplateHTMLElement = bookmarkTemplate instanceof HTMLElement;

  const links =
    (isBookmarkTemplateHTMLElement &&
      bookmarkTemplate.querySelectorAll('.link')) ||
    [];
  const thumbnail =
    (isBookmarkTemplateHTMLElement &&
      bookmarkTemplate.querySelector('.poster img')) ||
    null;
  const title =
    (isBookmarkTemplateHTMLElement &&
      bookmarkTemplate.querySelector('.title')) ||
    null;
  const lead =
    (isBookmarkTemplateHTMLElement &&
      bookmarkTemplate.querySelector('.lead')) ||
    null;
  const published =
    (isBookmarkTemplateHTMLElement &&
      bookmarkTemplate.querySelector('.published')) ||
    null;
  const authors =
    (isBookmarkTemplateHTMLElement &&
      bookmarkTemplate.querySelector('.authors')) ||
    null;
  const section =
    (isBookmarkTemplateHTMLElement &&
      bookmarkTemplate.querySelector('.section')) ||
    null;
  const removeButton =
    (isBookmarkTemplateHTMLElement &&
      bookmarkTemplate.querySelector('.remove')) ||
    null;

  links.forEach((link) => {
    if (link instanceof HTMLAnchorElement) {
      link.href = bookmark.url;
    }
  });

  if (thumbnail instanceof HTMLImageElement) {
    thumbnail.src = bookmark.image || '/img/placeholder.png';
  }
  if (title instanceof HTMLElement) {
    title.innerText = bookmark.title;
  }
  if (lead instanceof HTMLElement) {
    lead.innerHTML = bookmark.lead;
  }
  if (published instanceof HTMLElement) {
    published.innerText = bookmark.publishDate;
  }
  if (section instanceof HTMLElement) {
    section.innerText = bookmark.section;
  }
  if (authors instanceof HTMLElement) {
    authors.innerHTML = bookmark.authors;
  }
  if (removeButton instanceof HTMLElement) {
    removeButton.dataset.id = bookmark.sourceId;
    removeButton.addEventListener('click', () => {
      deleteBookmark(removeButton as HTMLButtonElement); // we are using a div as a button
    });
  }

  if (isBookmarkTemplateHTMLElement) {
    bookmarkTemplate.classList.remove('hidden');
  }

  return bookmarkTemplate;
};

const insertBookmarks = (storedBookmarksInPiano: StoredBookmarks) => {
  const { bookmarks } = storedBookmarksInPiano;
  const subscriber = getCookie(COOKIE_SUBSCRIBER) === 'true';

  if (!(bookmarks && bookmarks.length > 0)) {
    if (subscriber) {
      bookmarkWrapper
        ?.querySelector('.bookmarks-empty')
        ?.classList.remove('hidden');
    } else {
      bookmarkWrapper
        ?.querySelector('.bookmarks-require-subscription')
        ?.classList.remove('hidden');
    }
    return;
  }

  if (!subscriber) {
    bookmarkWrapper
      ?.querySelector('.bookmarks-expired-subscription')
      ?.classList.remove('hidden');
    return;
  }

  const bookmarksList = bookmarkWrapper?.querySelector('.list');

  bookmarks.forEach((bm) => {
    const bookmarkItem = createBookmarkItem(bm);
    if (bookmarkItem) {
      bookmarksList?.appendChild(bookmarkItem);
    }
  });
};

const clearList = async (tabWrapper: Element) => {
  const listWrapper = tabWrapper.querySelector('.list');
  while (listWrapper?.firstChild) {
    listWrapper.removeChild(listWrapper.firstChild);
  }
};

const setBookmarkLocalStorage = (bookmarks: Array<Bookmark>) => {
  const articleIds = bookmarks.map((b) => b.sourceId);
  localStorage.setItem('premiumBookmarks', JSON.stringify(articleIds));
};

const fetchBookmarks = () => {
  if (bookmarkWrapper) {
    clearList(bookmarkWrapper);
  }
  bookmarkWrapper?.querySelector('.loading')?.classList.remove('hidden');
  InternalApi.get('bookmarks')
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error('Network response was not ok.');
    })
    .then((response) => {
      bookmarkWrapper?.querySelector('.loading')?.classList.add('hidden');
      insertBookmarks(response);
      setBookmarkLocalStorage(response.bookmarks);
    })
    .catch((error) => {
      console.error('Fetch failed: ', error.message);
    });
};

const toggleActive = (
  items: NodeListOf<Element>,
  match: string,
  isMenu: boolean = false,
) => {
  items.forEach((item) => {
    const isItemHTMLElement = item instanceof HTMLElement;
    if (isItemHTMLElement && match === item.dataset.tab) {
      return item.classList.add('active');
    }
    const isEvent =
      match.startsWith('event') &&
      isItemHTMLElement &&
      item.dataset.tab === 'events';
    const isEbook =
      match.startsWith('ebook') &&
      isItemHTMLElement &&
      item.dataset.tab === 'ebooks';
    if (isMenu && (isEvent || isEbook)) {
      return item.classList.add('active');
    }
    item.classList.remove('active');
  });
};

const showHashPage = () => {
  const hash = location.hash.substring(1);
  const menuBtns = document.querySelectorAll(
    `.${CLASS_PREMIUM_MENU} [data-tab]`,
  );
  const pages = document.querySelectorAll('.premium-wrapper [data-tab]');
  if (hash === 'bookmarks') {
    fetchBookmarks();
  }

  toggleActive(pages, hash);
  toggleActive(menuBtns, hash, true);
};

showHashPage();

window.addEventListener('hashchange', showHashPage, false);
