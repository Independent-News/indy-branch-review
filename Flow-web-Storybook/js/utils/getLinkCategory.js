import {
  CLASS_PRIMARY_ITEM,
  CLASS_PRIMARY_LINK,
  CLASS_DRAWER_MENU_SECTION,
  CLASS_DRAWER_TRIGGER_TITLE,
} from '#app/constants/classNames';

export const getDrawerLinkCategory = (event) => {
  const drawerMenuSection = event.target.closest(
    `.${CLASS_DRAWER_MENU_SECTION}`,
  );
  if (drawerMenuSection) {
    return drawerMenuSection?.querySelector(`.${CLASS_DRAWER_TRIGGER_TITLE}`)
      .innerText;
  } else {
    return event.target
      .closest('.section-list')
      ?.previousSibling?.querySelector('.link')?.innerText;
  }
};

export const getVisibleMenuLinkCategory = (event, text) => {
  const closestPrimaryItem = event.target.closest(`.${CLASS_PRIMARY_ITEM}`);
  if (closestPrimaryItem) {
    return closestPrimaryItem?.querySelector(`.${CLASS_PRIMARY_LINK}`)
      .innerText;
  } else {
    return (
      event.target.closest('.menu-navbar-item > ul')?.previousSibling
        ?.innerText || text
    );
  }
};
