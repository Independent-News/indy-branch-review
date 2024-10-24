import { CLASS_SUBSCRIPTION_PURCHASE_BTN } from '#app/constants/subscription';

import { dispatchAndCacheSubscriptionButtonClick } from './modules/custom-event-dispatchers';
import { showPianoOffer } from './piano';
import { redirect } from './utils/redirect';

const purchaseBtns: NodeListOf<HTMLElement> = document.querySelectorAll(
  `.${CLASS_SUBSCRIPTION_PURCHASE_BTN}`,
);
purchaseBtns.forEach((button) => {
  button.addEventListener('click', (event) => {
    const {
      offerId,
      termId,
      trackingPrice,
      trackingLength,
      trackingName,
      trackingCta,
    } = (event.target as HTMLElement)?.dataset ?? {};

    const trackingData = {
      subscription_length: trackingLength,
      subscription_price: trackingPrice,
      subscription_package: trackingName,
    };

    dispatchAndCacheSubscriptionButtonClick({
      subscribe_button_version: trackingCta,
      ...trackingData,
    });

    showPianoOffer({ offerId, termId, trackingData });
  });
});

const planSelectBtns: NodeListOf<HTMLElement> =
  document.querySelectorAll('.select-plan');
planSelectBtns.forEach((button) => {
  const section = button.closest('section');
  const selected = button.dataset.termLength;
  button.addEventListener('click', () => {
    section
      ?.querySelectorAll('.active')
      .forEach((el) => el.classList.remove('active'));
    section
      ?.querySelectorAll(`.${selected}`)
      .forEach((el) => el.classList.add('active'));
  });
});

window.tp = window.tp || [];
if (Array.isArray(window.tp)) {
  window.tp.push([
    'addHandler',
    'checkoutComplete',
    () => {
      fetch('/subscriber/check-access').catch(() =>
        console.error('Unable to complete subscription check.'),
      );
    },
  ]);
}

const readMoreBtns = document.querySelectorAll('.read-more');
readMoreBtns.forEach((btn) =>
  btn.addEventListener('click', () => {
    document
      .querySelectorAll('.feature-block')
      .forEach((el) => el.classList.remove('active'));
    btn.closest('.feature-block')?.classList.toggle('active');
  }),
);

const pricingBtnOne = document.querySelector('#zoom-up');
const pricingBtnTwo = document.querySelector('#zoom-down');

const showMindsFeatures = document.querySelector('#show-minds-features');
const showDailyFeatures = document.querySelector('#show-daily-features');
const dailyFeaturesBlock = document.querySelector('#daily-features-block');
const mindsFeaturesBlock = document.querySelector('#minds-features-block');
const pricingTable = document.querySelector('#pricing-table-scroll');

type HTMLElementOrNull = HTMLElement | null;

const featuresBlock: HTMLElementOrNull = document.querySelector('.pn-features');
const featuresOne: HTMLElementOrNull =
  document.querySelector('#show-features-one');
const featuresTwo: HTMLElementOrNull =
  document.querySelector('#show-features-two');
const featuresThree: HTMLElementOrNull = document.querySelector(
  '#show-features-three',
);

const toggleFeature = function (target: HTMLElement) {
  if (target) {
    target.addEventListener('click', function () {
      featuresBlock?.classList.add('pn-features__open');

      featuresOne?.classList.remove('pn-feature-open');
      featuresTwo?.classList.remove('pn-feature-open');
      featuresThree?.classList.remove('pn-feature-open');

      target.classList.add('pn-feature-open');
    });
  }
};

if (pricingBtnOne) {
  pricingBtnOne.addEventListener('click', function (e) {
    e.preventDefault();
    pricingTable?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
}
if (pricingBtnTwo) {
  pricingBtnTwo.addEventListener('click', function (e) {
    e.preventDefault();
    pricingTable?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
}

if (featuresOne) {
  toggleFeature(featuresOne);
}

if (featuresTwo) {
  toggleFeature(featuresTwo);
}

if (featuresThree) {
  toggleFeature(featuresThree);
}

if (showDailyFeatures) {
  showDailyFeatures.addEventListener('click', function (e) {
    e.preventDefault();
    dailyFeaturesBlock?.classList.toggle('show');
    mindsFeaturesBlock?.classList.remove('show');
  });
}
if (showMindsFeatures) {
  showMindsFeatures.addEventListener('click', function (e) {
    e.preventDefault();
    mindsFeaturesBlock?.classList.toggle('show');
    dailyFeaturesBlock?.classList.remove('show');
  });
}

window.addEventListener('message', (event) => {
  if (event.data === 'returnToPrevious') {
    const prev = localStorage.getItem('returnUrl');
    if (prev) {
      redirect(prev);
    } else {
      redirect(document.referrer);
    }
  }
});
