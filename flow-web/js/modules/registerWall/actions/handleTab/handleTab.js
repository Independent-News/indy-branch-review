import * as breakPoints from '#app/constants/breakpoints';

import { handleTabDesktop } from './handleTabDesktop';
import { handleTabMobile } from './handleTabMobile';
import { keyDown } from './keyDown';
import { sortFields } from './sortFields';

export const handleTab = (fields) => {
  const innerWindowWidth = window.innerWidth;
  const sortedFields = sortFields(fields);

  if (breakPoints.mobileL > innerWindowWidth) {
    handleTabMobile(sortedFields, keyDown);

    return;
  }

  handleTabDesktop(sortedFields, keyDown);
};
