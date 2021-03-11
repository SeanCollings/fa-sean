import React from 'react';
import renderer from 'react-test-renderer';
import { useSelector } from 'react-redux';
import { useActions } from '../../../hooks/use-actions';
import HomePage from '.';
import { FILTER_GENDER } from '../../../constants';

jest.mock('react-redux');
jest.mock('../../../hooks/use-actions');

describe('Home-page unit test', () => {
  const mockUpdateFilter = jest.fn();
  useActions.mockImplementation(() => ({
    updateFilter: mockUpdateFilter,
  }));

  afterEach(() => {
    jest.clearAllMocks();
  });

  const gender = FILTER_GENDER.female;

  test('should render', () => {
    useSelector.mockReturnValue({ gender });

    const component = renderer.create(<HomePage />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('should render with loading', () => {
    useSelector.mockReturnValue({ gender, loading: true });

    const component = renderer.create(<HomePage />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('should render with error', () => {
    useSelector.mockReturnValue({
      gender,
      loading: false,
      error: 'This is an error',
    });

    const component = renderer.create(<HomePage />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
