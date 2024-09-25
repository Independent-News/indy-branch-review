import {
  SUBSCRIBER_ORIGIN_UK,
  SUBSCRIBER_ORIGIN_US,
} from '#app/constants/subscriberOrigin';

import { getSubscriberOriginOnClient } from '#app/public/js/utils/getSubscriberOriginOnClient';
import { InternalApi } from '#app/public/js/utils/internalApi';
import { buildSubscriptionRedirectUrl } from '#app/util/buildSubscriptionRedirectUrl';

import { redirect } from './utils/redirect';

type StudentFieldsError = {
  message: string;
};

type StudentFields = {
  offerid: string;
  'tide-annual-term-id': string;
};

type StudentFieldsResponse = StudentFieldsError | StudentFields;

export const redirectStudentToSelectedSubscription = async () => {
  try {
    const subscriberOrigin = getSubscriberOriginOnClient();
    const savedRedirectURL = window.localStorage.getItem('studentRedirectUrl');
    const isUkOrUs = [SUBSCRIBER_ORIGIN_UK, SUBSCRIBER_ORIGIN_US].includes(
      subscriberOrigin,
    );
    if (savedRedirectURL) {
      redirect(savedRedirectURL);
      return;
    }
    if (!isUkOrUs) {
      throw new Error('Unsupported region.');
    }
    const getTemplateMappingsForDirectStudentBeansVisitor = async () =>
      await InternalApi.get('subscription/student-template-mappings');
    const res = await getTemplateMappingsForDirectStudentBeansVisitor();
    const studentFields: StudentFieldsResponse = await res.json();
    const hasResponseFailed = 'message' in studentFields;
    if (hasResponseFailed) {
      throw new Error(studentFields.message);
    }
    const redirectURL = buildSubscriptionRedirectUrl({
      offerId: studentFields.offerid,
      termId: studentFields['tide-annual-term-id'],
    });
    redirect(redirectURL);
  } catch (error: unknown) {
    console.error(error);
    redirect('/subscribe');
  }
};

(async () => await redirectStudentToSelectedSubscription())();
