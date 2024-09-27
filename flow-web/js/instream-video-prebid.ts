import { performApsAlongsidePrebid } from './modules/instreamVideoPrebid';

declare global {
  interface Window {
    performApsAlongsidePrebid: typeof performApsAlongsidePrebid;
  }
}
window.performApsAlongsidePrebid = performApsAlongsidePrebid;
