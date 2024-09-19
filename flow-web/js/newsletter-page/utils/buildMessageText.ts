export const buildMessageText = (numberSelected: number) => {
  if (numberSelected === 1) {
    return 'Sign up to 1 newsletter';
  } else {
    return `Sign up to ${numberSelected} newsletters`;
  }
};
