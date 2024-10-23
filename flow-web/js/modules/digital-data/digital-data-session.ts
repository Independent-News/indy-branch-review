import { TRACKING_PAYMENT_KEYS } from '#app/constants/adobeConstants';

import type { DigitalData } from '#types/digitalData';

const sessionKey = 'digitalData';

type DigitalDataPartial = Partial<DigitalData>;
type DigitalDataKeyArray = Readonly<Array<keyof DigitalData>>;

export const getDigitalData = (): DigitalData => {
  const value = sessionStorage.getItem(sessionKey) ?? '{}';
  return JSON.parse(value);
};

export const storeDigitalData = (data: DigitalDataPartial) => {
  const stored = getDigitalData();
  const merged = Object.assign({}, stored, data);
  const newValue = JSON.stringify(merged);
  sessionStorage.setItem(sessionKey, newValue);
};

export const getDigitalDataByKeys = <T extends keyof DigitalData>(
  keys: Readonly<Array<T>>,
) => {
  const stored = getDigitalData();
  const obj = keys.reduce(
    (acc, curr) => ({
      ...acc,
      [curr]: stored[curr],
    }),
    {} as {
      // eslint-disable-next-line no-use-before-define -- Not sure why eslint complains here but this works
      [K in (typeof keys)[number]]: DigitalData[K];
    },
  );
  return obj;
};

export const removeDigitalDataByKeys = (keys: DigitalDataKeyArray) => {
  const stored = getDigitalData();
  keys.forEach((key) => delete stored[key]);
  sessionStorage.setItem(sessionKey, JSON.stringify(stored));
};

export const clearDigitalData = () => {
  sessionStorage.removeItem(sessionKey);
};

export default (data: DigitalDataPartial) => {
  const dataKeys: DigitalDataKeyArray = [
    ...TRACKING_PAYMENT_KEYS,
    'subscribe_button_version',
    'auto_refresh',
    'mostWatched_algorithm',
    'mostWatched_paragraph_number',
  ];

  const sessionData = getDigitalDataByKeys(dataKeys);

  return {
    ...data,
    ...sessionData,
  };
};
