export const handleTabMobile = (fields, keyDownCallback) => {
  fields.forEach((field, index) => {
    const isLastElement = index === fields.length - 1;

    index === 0
      ? field.setAttribute('tabindex', 0)
      : field.setAttribute('tabindex', -1);

    !isLastElement && field.addEventListener('keydown', keyDownCallback);
  });
};
