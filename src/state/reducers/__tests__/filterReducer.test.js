import __fixtures__ from '../../../../__fixtures__';
import { FILTER_GENDER, FILTER_SORT } from '../../../constants';
import {
  UPDATE_FILTER,
  UPDATE_FILTER_ERROR,
  UPDATE_FILTER_SUCCESS,
} from '../../action-types';
import filterReducer from '../filterReducer';

describe('filter reducer', () => {
  const initialState = {
    gender: FILTER_GENDER.female,
    sort: FILTER_SORT.popularity,
    loading: false,
    error: null,
    results: null,
  };

  test('should return the initial state', () => {
    expect(filterReducer(undefined, {})).toEqual(initialState);
  });

  test('should handle UPDATE_FILTER', () => {
    const action = {
      type: UPDATE_FILTER,
      payload: { gender: FILTER_GENDER.male, sort: FILTER_SORT.new },
    };

    expect(filterReducer(initialState, action)).toEqual({
      ...initialState,
      loading: true,
      gender: FILTER_GENDER.male,
      sort: FILTER_SORT.new,
    });
  });

  test('should handle UPDATE_FILTER_SUCCESS', () => {
    const action = {
      type: UPDATE_FILTER_SUCCESS,
      payload: __fixtures__.results,
    };

    expect(filterReducer(initialState, action)).toEqual({
      ...initialState,
      loading: false,
      results: __fixtures__.results,
    });
  });

  test('should handle UPDATE_FILTER_ERROR', () => {
    const action = {
      type: UPDATE_FILTER_ERROR,
      payload: 'An error has occurred',
    };

    expect(filterReducer(initialState, action)).toEqual({
      ...initialState,
      loading: false,
      error: 'An error has occurred',
    });
  });
});
