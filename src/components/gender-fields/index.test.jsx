import React from 'react';
import renderer from 'react-test-renderer';
import { render, fireEvent } from '@testing-library/react';
import { useSelector } from 'react-redux';
import { useActions } from '../../hooks/use-actions';
import GenderFields from '.';
import { FILTER_GENDER } from '../../constants';

jest.mock('react-redux');
jest.mock('../../hooks/use-actions');

describe('gender-fields unit test', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  const mockUpdateFilter = jest.fn();
  useSelector.mockReturnValue({ gender: FILTER_GENDER.female });
  useActions.mockImplementation(() => ({
    updateFilter: mockUpdateFilter,
  }));

  test('should render', () => {
    const component = renderer.create(<GenderFields />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('should call updateFilter', () => {
    const component = render(<GenderFields />);
    fireEvent.click(component.getByText('Kids'));
    expect(mockUpdateFilter).toBeCalled();
  });
});
