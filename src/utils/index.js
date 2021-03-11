import { API_THE_ICONIC_URL, FILTER_GENDER, FILTER_SORT } from '../constants';

export const getProductUrl = ({
  gender = FILTER_GENDER.female.field,
  sort = FILTER_SORT.popularity.field,
  page = 1,
  pageSize = 10,
}) =>
  `${API_THE_ICONIC_URL}?gender=${gender}&page=${page}&page_size=${pageSize}&sort=${sort}`;

export const getFilterProperties = ({ gender, sort, state }) => {
  if (!state?.filter) return {};

  const { filter } = state;

  return {
    gender: { ...(gender || filter.gender) },
    sort: { ...(sort || filter.sort) },
  };
};
