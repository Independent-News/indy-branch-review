import { loadJS } from '../modules/util';

export default async () => {
  const { manifest } = window.JSGlobals;
  const reactArchipelagoScript = manifest['react-archipelago.js'];
  const hasReactArchipelago = !!document.querySelector(
    `script[src="${reactArchipelagoScript}"]`,
  );
  if (hasReactArchipelago) {
    return;
  }
  await loadJS(reactArchipelagoScript);
};
