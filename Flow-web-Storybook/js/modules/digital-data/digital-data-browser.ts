import dayjs from 'dayjs';

import { COOKIE_PUID, COOKIE_REGISTRATION_DATE } from '#app/constants/cookies';

import { getCookie } from '../cookie';

const referrer = document.referrer ? new URL(document.referrer) : '';

interface RefineDigitalData {
  components_list: string;
  desktop_components_list: string;
  mobile_components_list: string;
}

const refineDigitalData = ({
  components_list,
  desktop_components_list,
  mobile_components_list,
  ...digitalData
}: RefineDigitalData) => {
  const componentsList = [
    ...(components_list?.split(',') || []),
    ...((window.innerWidth > 999
      ? desktop_components_list
      : mobile_components_list
    )?.split(',') || []),
  ];

  const extraProps = {
    components_list: componentsList.join(','),
    desktop_components_list,
    mobile_components_list,
    page_title: document.title,
    page_query: document.location.search,
    page_name: document.location.pathname,
    ...(referrer && {
      page_previous_url: `${referrer.protocol}//${referrer.host}${referrer.pathname}`,
      page_previous_path: referrer.pathname,
      page_previous_query: referrer.search,
    }),
    timestamp: dayjs().format('YYYY:MM:DD:HH:mm:ss'),
    uid: getCookie(COOKIE_PUID),
    registration_date: getCookie(COOKIE_REGISTRATION_DATE),
  };

  return {
    ...digitalData,
    ...extraProps,
  };
};

export default refineDigitalData;
