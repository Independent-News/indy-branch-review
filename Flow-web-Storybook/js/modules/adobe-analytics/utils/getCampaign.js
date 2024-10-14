export default () => {
  const urlParams = new URLSearchParams(window.location.search);

  const { source, medium, campaign, term, content } = new Proxy(urlParams, {
    get: (params, prop) => params.get(`utm_${prop}`),
  });

  return source
    ? {
        campaign: [
          `S:${source}`,
          `M:${medium}`,
          `Ca:${campaign}`,
          `T:${term}`,
          `Co:${content}`,
        ].join('|'),
      }
    : {};
};
