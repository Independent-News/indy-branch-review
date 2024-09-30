/* globals JSGlobals */

export default (
  name,
  props = {},
  events = [],
  adobeLib = window[JSGlobals.ADOBE_ANALYTICS_OBJECT],
) => {
  const eventLinkTrackVars = [];
  const override = {};

  if (events.length) {
    eventLinkTrackVars.push('events');
    override.linkTrackEvents = events.join(',');
    override.events = override.linkTrackEvents;
  }

  const definedProps = Object.fromEntries(
    Object.entries(props).filter(([, value]) => typeof value !== 'undefined'),
  );

  const linkTrackVars = [...eventLinkTrackVars, ...Object.keys(definedProps)];

  if (linkTrackVars.length) {
    override.linkTrackVars = linkTrackVars.join(',');
  }

  Object.entries(definedProps).forEach(([key, value]) => {
    override[key] = value;
  });

  adobeLib.tl(true, 'o', name, override);
};
