/* global Sentry */
/* eslint-disable no-console */

import { PROD } from '#app/constants/server';

import { getCookie } from '#app/public/js/utils/cookie';

import { isSentryEnabledClientSide } from '../utils/sentry';

let showLog;
let showSentry;

const shouldLog = () => {
  if (typeof window === 'undefined') {
    return process.env.SERVER !== PROD;
  }

  if (typeof window !== 'undefined' && typeof showLog === 'undefined') {
    const params = new URLSearchParams(window?.location?.search);
    showLog = params.has('__DEBUG__');
  }

  return showLog || getCookie('__DEBUG__') === 'true';
};

const shouldLogToSentry = () => {
  if (typeof showSentry === 'undefined') {
    showSentry = isSentryEnabledClientSide();
  }

  return showSentry;
};

export const group = (...args) => {
  const showLog = shouldLog();

  showLog && console.group(...args);
};

export const groupEnd = (...args) => {
  const showLog = shouldLog();

  showLog && console.groupEnd(...args);
};

export const log = (...args) => {
  const showLog = shouldLog();

  showLog && console.log(...args);
};

export const warn = (...args) => {
  const showLog = shouldLog();
  const showSentry = shouldLogToSentry();

  showLog && console.warn(...args);
  showSentry && Sentry.captureException(...args);
};

export const error = (...args) => {
  const showLog = shouldLog();
  const showSentry = shouldLogToSentry();

  showLog && console.error(...args);
  showSentry && Sentry.captureException(...args);
};
