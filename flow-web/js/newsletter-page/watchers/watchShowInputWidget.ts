import { FormState } from '../FormState';
import { INPUT_WIDGET_ID } from '../constants';
import { animateIn, animateOut } from '../utils/animation';

export const watchShowInputWidget = (state: FormState) => {
  state.watch(
    (data) => data.showInputWidget,
    (showInputWidget: boolean, previousValue) => {
      const inputWidgetEl = document.getElementById(INPUT_WIDGET_ID);

      if (showInputWidget && inputWidgetEl) {
        animateIn(inputWidgetEl);
      } else {
        // don't run first time
        if (previousValue && inputWidgetEl) {
          animateOut(inputWidgetEl);
        }
      }
    },
  );
};
