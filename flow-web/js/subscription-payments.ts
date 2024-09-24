import {
  ID_SUBSCRIPTION_END_DATE,
  ID_CANCEL_SUBSCRIPTION_BUTTON,
  ID_CANCEL_SUBSCRIPTION_BUTTON_WRAPPER,
  ID_REACTIVATE_SUBSCRIPTION_BUTTON,
  ID_REACTIVATE_SUBSCRIPTION_BUTTON_WRAPPER,
  ID_AUTO_RENEW_TOGGLE,
  ID_AUTO_RENEW_TOGGLE_VALUE,
} from '#app/constants/ids';

type HTMLButtonElementOrNull = HTMLButtonElement | null;

const subscriptionEndDate = document.getElementById(ID_SUBSCRIPTION_END_DATE);
const reactivateSubscription = document.getElementById(
  ID_REACTIVATE_SUBSCRIPTION_BUTTON_WRAPPER,
);
const reactivateSubscriptionButton = document.getElementById(
  ID_REACTIVATE_SUBSCRIPTION_BUTTON,
) as HTMLButtonElementOrNull;
const cancelSubscription = document.getElementById(
  ID_CANCEL_SUBSCRIPTION_BUTTON_WRAPPER,
);
const cancelSubscriptionButton = document.getElementById(
  ID_CANCEL_SUBSCRIPTION_BUTTON,
) as HTMLButtonElementOrNull;
const contributorAutoRenewToggle = document.getElementById(
  ID_AUTO_RENEW_TOGGLE,
) as HTMLButtonElementOrNull;

const contributorAutoRenewValue = document.getElementById(
  ID_AUTO_RENEW_TOGGLE_VALUE,
);

const postData = async (url: string, data: Record<string, string>) => {
  const body = new FormData();

  Object.keys(data).forEach((key) => {
    body.append(key, data[key]);
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

const setIsSubscribedButtonVisibility = (isSubscribed: boolean) => {
  reactivateSubscription?.classList.toggle('hidden', isSubscribed);
  cancelSubscription?.classList.toggle('hidden', !isSubscribed);
  subscriptionEndDate?.classList.toggle('hidden', isSubscribed);
};

const updateAutoRenew = async (autoRenew: boolean, subscriptionId = '') => {
  const request = postData(
    `/internal-api/subscription/cancel?__amp_source_origin=${window.location.origin}`,
    {
      autoRenew: autoRenew.toString(),
      subscriptionId,
    },
  );
  request
    .then((response) => console.warn('success', response))
    .catch((error) => console.warn('error', error));

  return request;
};

if (reactivateSubscriptionButton) {
  reactivateSubscriptionButton.addEventListener('click', async () => {
    reactivateSubscriptionButton.disabled = true;
    try {
      await updateAutoRenew(
        true,
        reactivateSubscriptionButton.dataset.subscriptionId,
      );
      setIsSubscribedButtonVisibility(true);
    } catch (error) {
      console.warn(error);
    } finally {
      reactivateSubscriptionButton.disabled = false;
    }
  });
}

if (cancelSubscriptionButton) {
  cancelSubscriptionButton.addEventListener('click', async () => {
    cancelSubscriptionButton.disabled = true;
    try {
      await updateAutoRenew(
        false,
        cancelSubscriptionButton.dataset.subscriptionId,
      );
      setIsSubscribedButtonVisibility(false);
    } catch (error) {
      console.warn(error);
    } finally {
      cancelSubscriptionButton.disabled = false;
    }
  });
}

if (contributorAutoRenewToggle) {
  contributorAutoRenewToggle.addEventListener('click', async (e) => {
    contributorAutoRenewToggle.disabled = true;
    const autoRenewValue =
      (e.target as HTMLInputElement | null)?.checked ?? false;

    if (contributorAutoRenewValue) {
      contributorAutoRenewValue.innerHTML = autoRenewValue ? 'ON' : 'OFF';
    }

    try {
      await updateAutoRenew(
        autoRenewValue,
        contributorAutoRenewToggle.dataset.subscriptionId,
      );
    } catch (error) {
      console.warn(error);
    } finally {
      contributorAutoRenewToggle.disabled = false;
    }
  });
}
