import { getFilterProperties, getProductUrl } from '.';
import { FILTER_GENDER, FILTER_SORT } from '../constants';

describe('utils', () => {
  describe('getProductUrl', () => {
    test('should return product url with default paramaters', () => {
      const url = getProductUrl({});
      expect(url).toMatchSnapshot();
    });

    test('should return product url with updated gender paramater', () => {
      const url = getProductUrl({ gender: FILTER_GENDER.male.field });
      expect(url).toMatchSnapshot();
    });

    test('should return product url with updated sort paramater', () => {
      const url = getProductUrl({ sort: FILTER_SORT.price_high.field });
      expect(url).toMatchSnapshot();
    });
  });

  describe('getFilterProperties', () => {
    const state = {
      filter: {
        gender: FILTER_GENDER.male,
        sort: FILTER_SORT.price_low,
      },
    };

    test('should return an empty object if no state is passed in', () => {
      const properties = getFilterProperties({});
      expect(properties).toMatchSnapshot();
    });

    test('should return initial state if no properties passed in', () => {
      const properties = getFilterProperties({ state });
      expect(properties).toMatchSnapshot();
    });

    test('should return updated gender property', () => {
      const properties = getFilterProperties({
        gender: FILTER_GENDER.kids,
        state,
      });
      expect(properties).toMatchSnapshot();
    });

    test('should return updated sort property', () => {
      const properties = getFilterProperties({
        sort: FILTER_SORT.brand_asc,
        state,
      });
      expect(properties).toMatchSnapshot();
    });
  });
});
