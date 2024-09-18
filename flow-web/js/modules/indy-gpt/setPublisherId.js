/* global googletag */

export default (permutiveId) => {
  if (permutiveId) {
    googletag.cmd.push(() => {
      // parsing value as ppid only accepts alphanumeric characters
      googletag.pubads().setPublisherProvidedId(permutiveId.replace(/-/g, ''));
    });
  }
};
