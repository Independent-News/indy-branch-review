export const handleTabDesktop = (fields, keyDownCallback) => {
  fields.forEach((field) => {
    field.setAttribute('tabindex', 0);

    field.removeEventListener('keydown', keyDownCallback);
  });
};
