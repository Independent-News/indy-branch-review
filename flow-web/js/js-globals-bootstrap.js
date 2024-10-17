import { ID_JS_GLOBALS } from '#app/constants/ids';

window.JSGlobals = JSON.parse(
  document.getElementById(ID_JS_GLOBALS).textContent,
);
