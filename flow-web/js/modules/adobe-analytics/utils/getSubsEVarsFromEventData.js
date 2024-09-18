import * as adobeVars from '../constants/vars';

const OPT_IN_PROP_KEY = 'marketing_opt_in';

export default ({
  subscription_package,
  subscription_length,
  subscription_price,
  subscribe_button_version,
  selling_page_variant,
  initial_selected_package,
  ...others
}) =>
  Object.fromEntries(
    [
      [adobeVars.PACKAGE, subscription_package],
      [adobeVars.SUBSCRIPTION_LENGTH, subscription_length],
      [adobeVars.SUBSCRIPTION_PRICE, subscription_price],
      [adobeVars.SUBSCRIBE_BUTTON_VERSION, subscribe_button_version],
      ...(Object.keys(others).includes(OPT_IN_PROP_KEY)
        ? [
            [
              adobeVars.OPT_IN_OUT,
              others[OPT_IN_PROP_KEY] ? 'Opt in' : 'Opt out',
            ],
          ]
        : []),
      [adobeVars.INITIAL_SELECTED_PACKAGE, initial_selected_package],
    ].filter(([, value]) => value !== undefined),
  );
