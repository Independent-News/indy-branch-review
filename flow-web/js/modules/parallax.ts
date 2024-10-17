const getAdjustedViewportHeight = (el: HTMLElement) => {
  const viewportHeight = window.innerHeight;
  let offsetTop = 0;
  for (let node = el; node; node = node.offsetParent as HTMLElement) {
    offsetTop += node.offsetTop;
  }
  const aboveTheFold = offsetTop < viewportHeight;
  return aboveTheFold ? offsetTop : viewportHeight;
};

/**
 * @see https://github.com/ampproject/amphtml/blob/c02b605831642ea7aa0ec2b39791748faa3a723f/extensions/amp-fx-collection/0.1/providers/amp-fx-presets.js#L138-L160
 */
const parallax = () => {
  const elements = document.querySelectorAll(
    '[data-parallax]',
  ) satisfies NodeListOf<HTMLElement>;

  if (!elements.length) {
    return;
  }

  window.addEventListener('scroll', function () {
    elements.forEach((el: HTMLElement) => {
      const top = el.getBoundingClientRect().top;
      if (!top || top > window.innerHeight) {
        return;
      }

      const parallaxValue = el.dataset.parallax ?? '';
      const adjustedViewportHeight = getAdjustedViewportHeight(el);
      const adjustedFactor = -(parseFloat(parallaxValue) - 1);
      const offset = (adjustedViewportHeight - top) * adjustedFactor;
      el.style.transform = `translateY(${offset.toFixed(0)}px)`;
    });
  });
};

export default parallax;
