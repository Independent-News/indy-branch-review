import { ID_ANALYTICS_DATA } from '#app/constants/ids';

export default () => {
  const emptyObjectStr = '{}';
  const digitalDataStr =
    document.getElementById(ID_ANALYTICS_DATA)?.textContent || emptyObjectStr;

  return JSON.parse(digitalDataStr);
};
