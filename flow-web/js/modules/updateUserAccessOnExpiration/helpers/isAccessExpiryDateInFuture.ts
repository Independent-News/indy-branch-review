import type { UserAccessExpiryTimestamp } from '#types/user';

export default (accessExpiryTimestampInSeconds: UserAccessExpiryTimestamp) => {
  const todaysTimestampInMs = Date.now();
  const expiryTimestampToUseInMs =
    typeof accessExpiryTimestampInSeconds === 'number'
      ? accessExpiryTimestampInSeconds * 1000
      : todaysTimestampInMs;
  const isActiveSubscription = expiryTimestampToUseInMs > todaysTimestampInMs;
  return isActiveSubscription;
};
