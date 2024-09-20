export const buildNewsletterTrackingArray = (newsletterKeys: string[]) =>
  newsletterKeys.filter((item) => !!item).join(',');
