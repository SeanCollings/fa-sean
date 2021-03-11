import React from 'react';
import renderer from 'react-test-renderer';
import { useSelector } from 'react-redux';
import { useActions } from '../../hooks/use-actions';
import { FILTER_GENDER } from '../../constants';
import SortDropdown from '.';

jest.mock('react-redux');
jest.mock('../../hooks/use-actions');

describe('gender-fields unit test', () => {
  const mockUpdateFilter = jest.fn();
  useSelector.mockReturnValue({ gender: FILTER_GENDER.female });
  useActions.mockImplementation(() => ({
    updateFilter: mockUpdateFilter,
  }));

  test('should render', () => {
    const component = renderer.create(<SortDropdown />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
