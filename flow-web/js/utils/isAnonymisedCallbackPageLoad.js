export default () => {
  const pageURL = new URL(document.location.href);

  // @see https://support.anonymised.io/integrate/safeguarding-your-web-analytics#SafeguardingyourWebAnalytics-jsbasedtoolsOtherJavaScript-basedanalyticspackage
  return ['callback', 'code', 'state'].every((paramName) =>
    pageURL.searchParams.has(paramName),
  );
};
