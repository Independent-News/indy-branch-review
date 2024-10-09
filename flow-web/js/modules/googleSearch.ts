/* globals google*/
import { loadJS } from '#app/public/js/modules/util';

declare global {
  interface Window {
    __gcse: Record<string, unknown>;
  }
  const google: {
    search: {
      cse: {
        element: {
          render: (
            element1: Record<string, unknown>,
            element2: Record<string, unknown>,
          ) => void;
        };
      };
    };
    setOnLoadCallback: (arg1: () => void, arg2: boolean) => void;
  };
}

const initGoogleSearch = (cx: number, searchInstance: number) =>
  new Promise<void>((resolve) => {
    if (!cx) {
      resolve();
      return;
    }

    if (
      document.querySelectorAll(`#searchBox${searchInstance} #___gcse_0`)
        .length === 0
    ) {
      loadJS(`https://cse.google.com/cse.js?cx=${cx}`, {
        async: true,
      });

      const renderSearchElement = function () {
        google.search.cse.element.render(
          {
            div: `searchBox${searchInstance}`,
            tag: 'searchbox',
            gname: `searchbox-only${searchInstance}`,
          },
          {
            div: `quickSearchresults${searchInstance}`,
            tag: 'searchresults-only',
            gname: `searchbox-only${searchInstance}`,
          },
        );

        resolve();
      };

      const callback = function () {
        google.setOnLoadCallback(renderSearchElement, true);
      };

      window.__gcse = Object.assign(window.__gcse, {
        parsetags: 'explicit',
        callback,
      });
    }
  });

export default initGoogleSearch;
