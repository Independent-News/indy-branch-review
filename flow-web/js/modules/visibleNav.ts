import {
  CLASS_PRIMARY_ITEM,
  CLASS_PRIMARY_ITEM_OPEN,
  CLASS_PRIMARY_LINK,
  CLASS_PRIMARY_TRIGGER,
} from '#app/constants/classNames';
import {
  ID_TV_LINK,
  ID_FRAMEINNER,
  ID_STANDARD_HEADER_MAIN,
} from '#app/constants/ids';

const visibleNav = () => {
  const standardHeader = document.getElementById(ID_STANDARD_HEADER_MAIN);

  if (!standardHeader) {
    return;
  }

  const indyTVLink = document.getElementById(ID_TV_LINK);
  const menuItems = [...document.getElementsByClassName(CLASS_PRIMARY_ITEM)];

  const closeOthers = (parentIndex: number | MouseEvent) => {
    menuItems.forEach((item: Element, i: number) => {
      if (i !== parentIndex) {
        item.classList.remove('primary-item__open');
        item
          .querySelector(`.${CLASS_PRIMARY_TRIGGER}`)!
          .setAttribute('aria-expanded', 'false');
      }
    });
  };

  const triggerMenu = (item: Element, event: MouseEvent) => {
    const isOpen = item.classList.contains(CLASS_PRIMARY_ITEM_OPEN);
    item.classList[isOpen ? 'remove' : 'add'](CLASS_PRIMARY_ITEM_OPEN);
    (event.target as HTMLDivElement).setAttribute(
      'aria-expanded',
      isOpen ? 'false' : 'true',
    );
  };

  menuItems.forEach((item, i) => {
    const link = item.querySelector(`.${CLASS_PRIMARY_LINK}`);
    const linkText = link?.textContent ? link.textContent : '';
    const trigger = document.createElement('button');
    const triggerText = document.createTextNode(linkText);
    trigger.appendChild(triggerText);
    trigger.classList.add(CLASS_PRIMARY_TRIGGER);
    item.insertBefore(trigger, link);
    link?.setAttribute('tabindex', '-1');

    trigger.addEventListener('click', (event: MouseEvent) => {
      triggerMenu(item, event);
      closeOthers(i);
    });

    trigger.addEventListener('focus', () => {
      closeOthers(i);
    });
  });

  if (indyTVLink) {
    indyTVLink.addEventListener('focus', () => {
      closeOthers(-1);
    });
  }

  document
    .getElementById(ID_FRAMEINNER)
    ?.addEventListener('click', closeOthers);

  standardHeader.addEventListener('click', closeOthers);
};

export default visibleNav;
