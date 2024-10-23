/* globals braze */

import {
  CLASS_NOTIFICATION_PROMPT,
  CLASS_NOTIFICATION_PROMPT_ACCEPT,
  CLASS_NOTIFICATION_PROMPT_DENY,
  CLASS_NOTIFICATION_PROMPT_SHOW,
} from '#app/constants/classNames';
import { BRAZE_WEB_PRIMER_EXPIRY_DATE } from '#app/constants/localStorage';

import * as thisModule from '../helpers/nativePushNotificationsPrompt';

export const ONE_MONTH_IN_MS = 30 * 24 * 60 * 60 * 1000;

/**
 * Hide the notification prompt
 */
const handleHidePrompt = () => {
  document
    .querySelector(`.${CLASS_NOTIFICATION_PROMPT}`)
    ?.classList?.remove(CLASS_NOTIFICATION_PROMPT_SHOW);
};

/**
 * Handle acceptance of the notification prompt
 */
const handleAcceptPrompt = () => {
  braze.openSession();

  Notification.requestPermission();

  handleHidePrompt();
};

/**
 * Setup the UI for notification prompts and bind event listeners
 */
export const setupNotificationsPrompt = () => {
  const nativePromptAcceptBtn = document.querySelector(
    `.${CLASS_NOTIFICATION_PROMPT_ACCEPT}`,
  );
  const nativePromptDenyBtn = document.querySelector(
    `.${CLASS_NOTIFICATION_PROMPT_DENY}`,
  );

  nativePromptAcceptBtn?.addEventListener('click', handleAcceptPrompt);

  nativePromptDenyBtn?.addEventListener('click', () => handleHidePrompt());
};

export const grabPromptDeniedExpiryDate = () => {
  const expiryDate = localStorage.getItem(BRAZE_WEB_PRIMER_EXPIRY_DATE);
  return expiryDate ? JSON.parse(expiryDate) : null;
};

export const setPromptDeniedExpiryDate = (expiryDate) =>
  localStorage.setItem(BRAZE_WEB_PRIMER_EXPIRY_DATE, expiryDate);

export const expirePromptDeniedInOneMonth = () => {
  const todayInMs = Date.now();
  const expiryDate = todayInMs + ONE_MONTH_IN_MS;
  thisModule.setPromptDeniedExpiryDate(expiryDate);
};

export const hasPromptDeniedExpired = () => {
  const expiryDate = thisModule.grabPromptDeniedExpiryDate() ?? 0;
  return Date.now() > expiryDate;
};

/**
 * We don't want to display the soft push prompt to users on browsers that don't support push, if the user has already granted/blocked permission, or if they've denied the prompt in this session
 */
export const shouldSuppressPrompt = () => {
  const promptDenied = sessionStorage.getItem('promptDenied') === 'true';
  const promptDeniedExpired = thisModule.hasPromptDeniedExpired();

  return (
    !braze.isPushSupported() ||
    braze.isPushPermissionGranted() ||
    braze.isPushBlocked() ||
    promptDenied ||
    !promptDeniedExpired
  );
};

export const displayNativePrompt = () => {
  const nativePrompt = document.querySelector(`.${CLASS_NOTIFICATION_PROMPT}`);

  nativePrompt?.classList?.add(CLASS_NOTIFICATION_PROMPT_SHOW);
};

/**
 * Binds the click event to the deny button of the prompt to set a flag in session storage.
 */
export const handleDenyButton = () => {
  const nativePromptDenyBtn = document.querySelector(
    `.${CLASS_NOTIFICATION_PROMPT_DENY}`,
  );

  nativePromptDenyBtn?.addEventListener('click', () => {
    sessionStorage.setItem('promptDenied', 'true');
    thisModule.expirePromptDeniedInOneMonth();
  });
};
