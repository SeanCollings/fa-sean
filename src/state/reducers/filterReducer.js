import { FILTER_GENDER, FILTER_SORT } from '../../constants';
import {
  UPDATE_FILTER,
  UPDATE_FILTER_ERROR,
  UPDATE_FILTER_SUCCESS,
} from '../action-types';

const initialState = {
  gender: FILTER_GENDER.female,
  sort: FILTER_SORT.popularity,
  loading: false,
  error: null,
  results: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_FILTER:
      const { gender, sort } = action.payload;
      return { ...state, gender, sort, loading: true };
    case UPDATE_FILTER_SUCCESS:
      return { ...state, results: action.payload, loading: false };
    case UPDATE_FILTER_ERROR:
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
};
