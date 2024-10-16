import { hydrateComponent } from '@indy/archipelago/bootstrap';

import { ID_NEWSLETTER_PREFERENCES_PAGE } from '#app/constants/ids';

import Wrapper from '#app/component/library/Hydration/IndyClientIslandWrapper';
import NewsletterPreferencesContent from '#app/component/pages/NewsletterPreferences/NewsletterPreferencesContent';

const container = document.getElementById(ID_NEWSLETTER_PREFERENCES_PAGE);
if (!container) {
  throw new Error('Could not find newsletter page container');
}

hydrateComponent(
  container as HTMLDivElement,
  { NewsletterPreferencesContent },
  { Wrapper },
);
