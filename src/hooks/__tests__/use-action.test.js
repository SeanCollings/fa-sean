import { useDispatch } from 'react-redux';
import { useActions } from '../use-actions';

jest.mock('react-redux');

describe('use action hook', () => {
  useDispatch.mockReturnValue(jest.fn());

  test('should return', () => {
    const action = useActions();
    expect(action).toMatchSnapshot();
  });
});
