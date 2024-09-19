/* globals s_object */

export default ({ props = {}, events = [] }) => {
  events.forEach((evt) => {
    s_object.events = s_object.apl(s_object.events, evt, ',', ',', false);
  });

  Object.entries(props).forEach(([key, value]) => {
    s_object[key] = value;
  });
};
