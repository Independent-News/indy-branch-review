/* globals permutive */
export { initPermutive, permutiveReady } from './initPermutive';

export const initPermutiveReadyWithTimeout = () => {
  try {
    permutive.readyWithTimeout = async (callback, type, timeout) => {
      await Promise.race([
        new Promise((resolve) => setTimeout(resolve, timeout)),
        new Promise((resolve) => permutive.ready(resolve, type)),
      ]);

      callback();
    };
  } catch (error) {
    console.error('Failed to init permutive.readyWithTimeout', error.message);
  }
};
