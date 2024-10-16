export const sortFields = (fields) =>
  [...fields].sort((firstField, secondField) => {
    return (
      Number(firstField.getAttribute('data-tabindex')) -
      Number(secondField.getAttribute('data-tabindex'))
    );
  });
