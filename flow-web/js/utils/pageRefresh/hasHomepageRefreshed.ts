import hasPageRefreshed from './hasPageRefreshed';

export default () => {
  const isPageRefresh = hasPageRefreshed();
  const isHomepage = location.pathname === '/';
  return isPageRefresh && isHomepage;
};
