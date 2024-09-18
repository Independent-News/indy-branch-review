import initBrazeSDK from './initBrazeSDK';

export default async () => {
  const isBrazeInitialised = await initBrazeSDK();
  if (isBrazeInitialised) {
    window.braze.openSession();
  }
};
