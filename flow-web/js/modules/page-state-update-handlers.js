import { dispatch } from '#app/context/ArchipelagoProvider';

export default () => {
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      dispatch({ type: 'escape_key_press' });
    }
  });
};
