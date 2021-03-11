import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';
import {
  UPDATE_FILTER,
  UPDATE_FILTER_ERROR,
  UPDATE_FILTER_SUCCESS,
} from '../../action-types';
import { actionCreators } from '../..';
import { FILTER_GENDER, FILTER_SORT } from '../../../constants';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

jest.mock('axios', () => ({
  ...jest.requireActual('axios'),
  get: jest.fn(),
}));

describe('filter action creator', () => {
  const testData = { test: 'data' };
  const initialState = {
    gender: FILTER_GENDER.female,
    sort: FILTER_SORT.popularity,
    loading: false,
    error: null,
    results: null,
  };

  test('should dispatch actions for updateFilter', async () => {
    axios.get.mockReturnValueOnce({ data: testData });

    const expectedActions = [
      {
        type: UPDATE_FILTER,
        payload: { gender: FILTER_GENDER.female, sort: FILTER_SORT.popularity },
      },
      { type: UPDATE_FILTER_SUCCESS, payload: testData },
    ];

    const store = mockStore(initialState);
    await store.dispatch(actionCreators.updateFilter({}));

    expect(store.getActions()).toEqual(expectedActions);
  });

  test('should handle errors in getTodos', async () => {
    axios.get.mockReturnValueOnce(Promise.reject({ message: 'error message' }));

    const expectedActions = [
      {
        type: UPDATE_FILTER,
        payload: { gender: FILTER_GENDER.female, sort: FILTER_SORT.popularity },
      },
      { type: UPDATE_FILTER_ERROR, payload: 'error message' },
    ];

    const store = mockStore(initialState);
    await store.dispatch(actionCreators.updateFilter({}));

    expect(store.getActions()).toEqual(expectedActions);
  });
});
