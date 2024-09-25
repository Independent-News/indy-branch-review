export default (accessExpiryTimestampInSeconds) => {
  const todaysTimestampInMs = Date.now();
  const expiryTimestampToUseInMs =
    typeof accessExpiryTimestampInSeconds === 'number'
      ? accessExpiryTimestampInSeconds * 1000
      : todaysTimestampInMs;
  const isActiveSubscription = expiryTimestampToUseInMs > todaysTimestampInMs;
  return isActiveSubscription;
};
