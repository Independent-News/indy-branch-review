import { getCookie } from '#app/public/js/utils/cookie';

export const forceSpToRegenerateConsentFromOrigin = (siteId: number) =>
  localStorage.removeItem(`_sp_user_consent_${siteId}`);

export default async () => {
  const siteId = window._sp_?.metricData?.propertyId;
  if (!siteId) {
    throw new Error('Failed to retrieve SourcePoint site id');
  }
  const consentUUID = getCookie('consentUUID') ?? '';
  const authId = window._sp_?.config?.authId ?? '';
  const url = new URL(
    `https://cdn.privacy-mgmt.com/consent/tcfv2/consent/v3/${siteId}`,
  );
  url.searchParams.append('consentUUID', consentUUID);
  url.searchParams.append('authId', authId);
  const deleteRes = await fetch(url.toString(), {
    method: 'DELETE',
  });
  if (!deleteRes.ok) {
    throw new Error(
      `Failed to delete user consent: ${JSON.stringify(deleteRes)}`,
    );
  }
  forceSpToRegenerateConsentFromOrigin(siteId);
};
