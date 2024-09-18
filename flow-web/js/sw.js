import { precacheAndRoute } from 'workbox-precaching/precacheAndRoute';

import cacheWorker from '../../service-workers/cache-worker';

self.importScripts('https://js.appboycdn.com/web-sdk/4.8/service-worker.js');

precacheAndRoute(self.__WB_MANIFEST);
cacheWorker();
