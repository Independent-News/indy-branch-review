import { SW_FILENAME } from '@brightsites/flow-core/lib/constants';

const initServiceWorker = () => {
  Promise.resolve().then(async () => {
    if ('serviceWorker' in navigator) {
      try {
        await navigator.serviceWorker.register(`/${SW_FILENAME}`);
      } catch (error) {
        console.error('Service Worker registration failed:', error);
      }
    } else {
      console.error('Service Worker is not supported by your browser');
    }
  });
};

export default initServiceWorker;
