import axios from 'axios';
import { getFilterProperties, getProductUrl } from '../../utils';
import {
  UPDATE_FILTER,
  UPDATE_FILTER_ERROR,
  UPDATE_FILTER_SUCCESS,
} from '../action-types';
import { store } from '../store';

export const updateFilter = ({ gender, sort }) => async (dispatch) => {
  const properties = getFilterProperties({
    gender,
    sort,
    state: store.getState(),
  });

  dispatch({
    type: UPDATE_FILTER,
    payload: properties,
  });

  try {
    const { data } = await axios.get(
      getProductUrl({
        gender: properties.gender.field,
        sort: properties.sort.field,
      })
    );

    if (data) {
      dispatch({
        type: UPDATE_FILTER_SUCCESS,
        payload: data,
      });
    }
  } catch (err) {
    dispatch({
      type: UPDATE_FILTER_ERROR,
      payload: err.message,
    });
  }
};
