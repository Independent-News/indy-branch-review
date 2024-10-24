import { COOKIE_PUID, COOKIE_LOGGED_IN } from '#app/constants/cookies';

import {
  CLASS_JS_COMMENT_COUNT,
  CLASS_JS_COMMENT_PLURAL,
  CLASS_COMMENT_EMPTY,
  CLASS_COMMENT_LOADED,
  CLASS_JS_COMMENT,
} from '#app/constants/classNames';
import { ID_COMMENTS_AREA } from '#app/constants/ids';
import { COMMENTING_RSM } from '#app/constants/regSourceMethods';

import { setCookie } from '#app/public/js/modules/cookie';
import { getCookie } from '#app/public/js/utils/cookie';

import {
  dispatchCommentSubmitted,
  dispatchLoadMoreComments,
  dispatchFlagCommentClick,
  dispatchVoteCommentClick,
} from './custom-event-dispatchers';
import { error, log } from './log';
import { openLoginDrawer } from './loginDrawer';
import { loadJS } from './util';

declare global {
  interface Window {
    vfQ: Array<() => void>;
    vf: {
      $prepublish: (
        // eslint-disable-next-line @typescript-eslint/no-explicit-any -- this is coming from Viafoura's SDK
        callback: (channel: string, event: string, ...args: any[]) => any,
      ) => void;
      $subscribe: (
        channel: string,
        event: string,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any -- this is coming from Viafoura's SDK
        callback: () => any,
      ) => void;
      context: {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any -- this is coming from Viafoura's SDK
        get(user: string): Promise<any>;
      };
      session: {
        login: {
          cookie: (cookie: string) => null;
        };
        // eslint-disable-next-line @typescript-eslint/no-explicit-any -- this is coming from Viafoura's SDK
        logout(): Promise<any>;
      };
    };
  }
}

interface NickNameData {
  nickname: string;
}

interface UpdateNickname {
  success: boolean;
  errorMessage?: string;
}

const heightLimit = 600;
let authenticationAttempts = 0;

const postData = async (url: string, data: NickNameData) => {
  const body = new FormData();

  Object.keys(data).forEach((key: string) => {
    body.append(key, data[key as keyof NickNameData]);
  });

  const response = await fetch(url, {
    method: 'POST',
    mode: 'same-origin',
    cache: 'no-cache',
    credentials: 'same-origin',
    body,
  });

  return response;
};

const reAuthenticateComments = (reCheckNickname?: () => void) => {
  authenticationAttempts++;

  log(`Commenting: Reauthenticating, attempt ${authenticationAttempts}`);
  window.vf.session
    .logout()
    .then(window.vf.session.login.cookie(getCookie(COOKIE_PUID) || ''))
    .then(() => {
      if (reCheckNickname) {
        setTimeout(reCheckNickname, 500);
      }
    });
};

const updateNickname = (
  nickname: string,
  callback: (params: UpdateNickname) => void,
) => {
  postData(
    `/internal-api/comments/nickname/submit?__amp_source_origin=${window.location.origin}`,
    { nickname },
  )
    .then((response) => {
      if (response.status === 200) {
        callback({ success: true });
      } else {
        return response.json().then(({ message }) => {
          callback({ success: false, errorMessage: message });
        });
      }
    })
    .catch((error) => {
      callback({ success: false, errorMessage: error.message });
    });
};

const isValidKeyChar = (code: number) =>
  (code > 64 && code < 91) ||
  (code > 96 && code < 123) ||
  code === 8 ||
  (code >= 48 && code <= 57);

const createNicknameForm = (onSubmit: (arg0: string) => void) => {
  const addNickNameArea = document.createElement('div');
  const addNickNameHeading = document.createElement('h2');
  const addNickNameDescription = document.createElement('p');
  const addNickNameForm = document.createElement('div');
  const addNickNameInput = document.createElement('input');
  const addNickNameSubmit = document.createElement('button');

  addNickNameArea.id = 'add-nickname-form';
  addNickNameHeading.innerHTML =
    "We have noticed you don't have a commenting name yet.";
  addNickNameDescription.innerHTML =
    "Your commenting name is what people will see when you make any comments across Independent articles. Please don't use anything rude or anything that could identify you.";
  addNickNameInput.setAttribute('placeholder', 'Commenting name');
  addNickNameInput.setAttribute('pattern', '^[A-Za-z0-9]{3,40}$');
  addNickNameInput.required = true;
  addNickNameSubmit.innerHTML = 'SUBMIT';
  addNickNameSubmit.disabled = true;

  addNickNameArea.appendChild(addNickNameHeading);
  addNickNameArea.appendChild(addNickNameDescription);
  addNickNameArea.appendChild(addNickNameForm);
  addNickNameForm.appendChild(addNickNameInput);
  addNickNameForm.appendChild(addNickNameSubmit);

  addNickNameSubmit.addEventListener('click', ({ target }) => {
    if (target instanceof HTMLInputElement && target.disabled) {
      return false;
    }

    onSubmit(addNickNameInput.value.trim());
  });

  // block invalid chars being entered into display name field
  addNickNameInput.addEventListener('keypress', (evt) => {
    if (!isValidKeyChar(evt.key.charCodeAt(0))) {
      evt.preventDefault();
    }
  });

  addNickNameInput.addEventListener('input', (evt) => {
    addNickNameSubmit.disabled =
      evt.target instanceof HTMLInputElement && !evt.target.checkValidity();
  });

  return addNickNameArea;
};

const initNicknameForm = () => {
  const [postCommentArea] = document.getElementsByClassName('vf-post-form');
  const postCommentFormField = postCommentArea.firstElementChild;
  if (postCommentFormField instanceof HTMLDivElement) {
    postCommentFormField.style.display = 'none';
  }

  const addNickNameArea = createNicknameForm((nickname: string) => {
    updateNickname(nickname, ({ success, errorMessage }) => {
      if (!success) {
        alert(errorMessage);
        return;
      }
      postCommentArea.removeChild(addNickNameArea);
      if (postCommentFormField instanceof HTMLDivElement) {
        postCommentFormField.style.display = 'block';
      }

      reAuthenticateComments();
    });
  });

  postCommentArea.appendChild(addNickNameArea);
};

const checkNickname = () => {
  window.vf.context.get('user').then((viaforaUser) => {
    if (viaforaUser) {
      // check to see if comments session aligns with website session & user is
      // not guest
      if (
        viaforaUser.user_privilege === 'guest' ||
        getCookie(COOKIE_PUID) !== viaforaUser.social_login_id
      ) {
        // if not aligned reauthenticate, and then try again
        reAuthenticateComments(() => {
          if (authenticationAttempts < 10) {
            checkNickname();
          }
        });
      } else if (viaforaUser.name.toLowerCase() === 'anonymous') {
        log(
          'Commenting: User has not set nickname, initialising nickname form',
        );
        initNicknameForm();
      }
    }
  });
};

const limitCommentingHeight = () => {
  const wrapperElem = document.getElementById('comments');
  const actualHeight = wrapperElem?.offsetHeight || 0;

  if (actualHeight > heightLimit) {
    wrapperElem?.classList.add('height-limited');

    const showMoreButton = document.createElement('button');
    showMoreButton.className = 'show-more';
    showMoreButton.innerHTML = 'See more comments';

    wrapperElem?.appendChild(showMoreButton);

    const handleClick = () => {
      wrapperElem?.removeChild(showMoreButton);
      wrapperElem?.classList.remove('height-limited');
      wrapperElem?.removeEventListener('click', handleClick);
      dispatchLoadMoreComments();
    };

    wrapperElem?.addEventListener('click', handleClick);
  }
};

const addAnalyticsClickHandlers = () => {
  document
    .getElementById('comments')
    ?.addEventListener('click', ({ target }) => {
      if (target instanceof HTMLElement) {
        if (
          target.className
            .split(' ')
            .some(
              (classStr) =>
                classStr.startsWith('vf-content-actions__like') ||
                classStr.startsWith('vf-content-actions__dislike'),
            )
        ) {
          dispatchVoteCommentClick({});
        } else if (['Flag', 'Flagged'].includes(target.innerText?.trim())) {
          dispatchFlagCommentClick({});
        } else if (target.closest('.vf-load-more__button')) {
          // I can't find '.vf-load-more__button'. it's not probably working
          dispatchLoadMoreComments();
        }
      }
    });
};

const logoutOfCommentingIfLoggedIn = () => {
  window.vf.context.get('user').then((user) => {
    if (user.id !== 0) {
      window.viafoura?.session.logout();
    }
  });
};

const isLoggedIn = () => getCookie(COOKIE_LOGGED_IN);

export const changeCTA = () => {
  const els = document.getElementsByClassName(CLASS_JS_COMMENT);

  [...els].forEach((el) => {
    if (el instanceof HTMLElement) {
      const countEl = el.querySelector(`.${CLASS_JS_COMMENT_COUNT}`);
      const pluralEl = el.querySelector(`.${CLASS_JS_COMMENT_PLURAL}`);
      const count = parseInt(el.dataset.count || '');

      el.classList.add(CLASS_COMMENT_LOADED);
      el.setAttribute('href', `#${ID_COMMENTS_AREA}`);
      if (countEl && pluralEl) {
        countEl.innerHTML =
          count > 0
            ? count.toString()
            : `<span class="${CLASS_COMMENT_EMPTY}"></span>`;
        pluralEl.innerHTML = count === 1 ? 'Comment' : 'Comments';
      }
    }
  });
};

const getCommentCount = async () => {
  const { endpoint, section_uuid } = window.JSGlobals.viafoura;
  const options = {
    method: 'POST',
    headers: { accept: 'application/json', 'content-type': 'application/json' },
    body: JSON.stringify([window.digitalData.article_id_root]),
  };

  try {
    const response = await fetch(
      `${endpoint}/v4/livecomments/${section_uuid}/content-containers/comment-count-and-status/by-container-ids`,
      options,
    );

    const data = await response.json();

    return data[0]?.commentCount || 0;
  } catch (err) {
    console.error(err);
  }

  return 0;
};

export const showCommentCount = (commentCount: number) => {
  const els = document.getElementsByClassName(CLASS_JS_COMMENT);

  [...els].forEach((el) => {
    if (el instanceof HTMLElement) {
      const countEl = el.querySelector(`.${CLASS_JS_COMMENT_COUNT}`);

      el.dataset.count = commentCount.toString() || '0';
      if (countEl) {
        countEl.innerHTML = commentCount.toString() || '';
      }
    }
  });
};

const initViafora = () => {
  const logoutButton = document.querySelector('a.icon-logout');

  addAnalyticsClickHandlers();

  window.vf.$prepublish((channel, event, ...args) => {
    // eslint-disable-next-line no-console
    console.log(`Commenting: channel = ${channel}; event = ${event};`);
    if (channel === 'commenting' && event === 'loaded') {
      try {
        limitCommentingHeight();
      } catch (e) {
        error('Commenting: Error in initViafora()->limitCommentingHeight()', e);
      }

      try {
        changeCTA();
      } catch (e) {
        error('Commenting: Error in initViafora()->changeCTA()', e);
      }

      if (isLoggedIn()) {
        checkNickname();
      } else {
        logoutOfCommentingIfLoggedIn();
      }
    }

    if (channel === 'comment' && event === 'created') {
      dispatchCommentSubmitted({});
    }

    if (channel === 'authentication' && event === 'required') {
      // add here the handler to trigger your authentication login flow

      openLoginDrawer(COMMENTING_RSM);

      return false;
    }

    return { channel, event, args };
  });

  window.vf.$subscribe('authentication', 'logout', () => {
    if (logoutButton instanceof HTMLElement) {
      logoutButton.click();
    }
  });
};

const pageHasComments = () => !!document.getElementById('comments');

const checkLoginCookie = async () => {
  if (!getCookie(COOKIE_PUID) && isLoggedIn()) {
    const response = await fetch('/api/puid');
    const jsonData = await response.json();

    setCookie(COOKIE_PUID, jsonData.uid, { days: 365 });
  }
};

const initComments = async () => {
  if (!pageHasComments) {
    return;
  }

  getCommentCount().then(showCommentCount);

  await checkLoginCookie();

  window.vfQ = window.vfQ || [];
  window.vfQ.push(initViafora);

  loadJS('//cdn.viafoura.net/entry/index.js');
};

export default initComments;
