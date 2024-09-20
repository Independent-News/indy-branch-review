/* globals JSGlobals */
import dayjs from 'dayjs';

import { EVENT_PIANO_READY } from '#app/constants/customEvents';
import { ID_PIANO_META_DATA } from '#app/constants/ids';

import { diffInDays } from '#app/util/dates';

import * as ea from '../extendedAccess';

import { log } from './log';
import { triggerExperiencesOnPianoInit } from './pianoIntegration';
import spanishRedirect from './spanishRedirect';
import { loadJS } from './util';

export const articleIsOverOneYearOld = (articleDate) => {
  const timestamp = dayjs(articleDate).unix();
  return diffInDays(timestamp) > 365;
};

const getPianoInfo = () => {
  try {
    const rawPianoInfo = document.getElementById(ID_PIANO_META_DATA).innerText;
    return JSON.parse(rawPianoInfo);
  } catch {
    return {};
  }
};

export default async () => {
  window.JSGlobals = window.JSGlobals || {
    mode: 'development',
  };

  const pianoCallback = async () => {
    // this is ok as we reassign back at bottom of this function
    const tp = window.tp || [];
    window.tp = tp;
    const pianoInfo = getPianoInfo();
    const { tags = [] } = pianoInfo;

    const tag = spanishRedirect();

    if (tag) {
      tags.push(tag);
    }

    tp.push([
      'addHandler',
      'checkoutCustomEvent',
      (event) => {
        if (event && event.eventName === 'offer-close-modal') {
          const footerPrompt = document.getElementById('footerPrompt');
          if (footerPrompt) {
            footerPrompt.classList.add('hide');
          }
        }
      },
    ]);

    if (JSGlobals.isSection) {
      const newsletterCompEl = document.getElementsByClassName(
        'newsletter-component',
      )[0];

      if (newsletterCompEl) {
        const newsletterKey = newsletterCompEl.getAttribute(
          'data-newsletter-key',
        );

        if (newsletterKey) {
          tags.push(newsletterKey.trim());
        }
      }
    }

    try {
      if (ea.accessedFromGoogle) {
        tp.push([
          'addHandler',
          'meterExpired',
          (event) => {
            if (event.meterName === 'PremiumArticleMeter') {
              log('PremiumArticleMeter expired');
              ea.meterExpired.resolve(true);
            }
          },
        ]);
        tp.push([
          'addHandler',
          'meterActive',
          (event) => {
            if (event.meterName === 'PremiumArticleMeter') {
              log('PremiumArticleMeter not expired');
              ea.meterExpired.resolve(false);
            }
          },
        ]);
      }
      tp.push([
        'setCustomVariable',
        'extendedAccessAllowed',
        String(ea.accessedFromGoogle),
      ]);
    } catch (e) {
      // do nothing?
    } finally {
      // set all page meta data for piano to do its experience segmentation shizz
      tp.push(
        ...Object.entries(pianoInfo).map(([key, value]) => [
          `set${key.charAt(0).toUpperCase()}${key.slice(1)}`,
          value,
        ]),
      );

      tp.push([
        'init',
        () => {
          window.tp.enableGACrossDomainLinking();
        },
      ]);

      window.tp = tp;
    }

    triggerExperiencesOnPianoInit();

    document.dispatchEvent(new CustomEvent(EVENT_PIANO_READY));
  };

  pianoCallback();

  try {
    await loadJS('https://www.npttech.com/advertising.js');
  } catch (e) {
    document.cookie = '__adblocker=true;path=/';
  }

  const checkValue = (field) => {
    if (field.value !== '') {
      field.classList.add('input-has-value');
    } else {
      field.classList.remove('input-has-value');
    }
  };
  // firefox prevents styling autofilled content
  const autofilledInputFields = document.querySelectorAll(
    '.form-textfield, .form-select',
  );
  autofilledInputFields.forEach((input) => {
    checkValue(input);
    input.addEventListener('change', () => {
      checkValue(input);
    });
  });
};
