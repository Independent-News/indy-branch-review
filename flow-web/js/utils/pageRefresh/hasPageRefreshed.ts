import { QUERY_PARAM_CMP_PAGE_REFRESH } from '#app/constants/queryParameters';

export default () => location.search.includes(QUERY_PARAM_CMP_PAGE_REFRESH);
