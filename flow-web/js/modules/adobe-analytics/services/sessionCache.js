const PREFIX = '__ADOBE__';

export const get = (key) => sessionStorage.getItem(`${PREFIX}${key}`);

export const store = (key, value) =>
  sessionStorage.setItem(`${PREFIX}${key}`, value);

export const clear = () => {
  const keys = Object.keys(sessionStorage);

  keys.forEach((key) => {
    if (key.startsWith(PREFIX)) {
      sessionStorage.removeItem(key);
    }
  });
};
