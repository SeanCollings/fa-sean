import React from 'react';
import { create, act } from 'react-test-renderer';
import { useSelector } from 'react-redux';
import { useActions } from '../../../hooks/use-actions';
import ProductsPage from '.';
import __fixtures__ from '../../../../__fixtures__';

jest.mock('react-redux');
jest.mock('../../../hooks/use-actions');

describe('Products-page unit test', () => {
  let component;
  const mockUpdateFilter = jest.fn();
  useActions.mockImplementation(() => ({
    updateFilter: mockUpdateFilter,
  }));

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('should render with no results', () => {
    useSelector.mockReturnValueOnce({});

    const component = create(<ProductsPage />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('should render with results', async () => {
    useSelector.mockReturnValue({ results: __fixtures__.results });

    await act(async () => {
      component = create(<ProductsPage />);
    });
    expect(component).toMatchSnapshot();
  });

  test('should render in loading state', async () => {
    useSelector.mockReturnValue({
      results: __fixtures__.results,
      loading: true,
    });

    await act(async () => {
      component = create(<ProductsPage />);
    });
    expect(component).toMatchSnapshot();
  });
});
