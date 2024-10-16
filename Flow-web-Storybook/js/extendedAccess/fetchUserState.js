import { InternalApi } from '../utils/internalApi';

export const fetchUserState = async () => {
  try {
    const response = await InternalApi.get('fetch-user-state');
    return await response.json();
  } catch (e) {
    return {};
  }
};
