export const animateIn = (el: HTMLElement) => {
  Object.assign(el.style, {
    transition: '0.4s transform linear',
    transform: 'translateY(100%)',
    display: 'block',
  });

  el.offsetHeight;

  el.style.transform = 'translateY(0)';
};

export const animateOut = (el: HTMLElement) => {
  el.addEventListener(
    'transitionend',
    () => {
      el.style.display = 'none';
    },
    { once: true },
  );

  Object.assign(el.style, {
    transition: '0.4s transform linear',
    transform: 'translateY(100%)',
  });
};
