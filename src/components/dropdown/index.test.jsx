import React from 'react';
import renderer from 'react-test-renderer';
import { FILTER_SORT } from '../../constants';
import Dropdown from '.';

describe('dropdown unit test', () => {
  const id = 'dropdown_test';
  const onChange = jest.fn();
  const items = Object.values(FILTER_SORT);

  test('should render without label', () => {
    const component = renderer.create(
      <Dropdown name={id} id={id} onChange={onChange} items={items} />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('should render with label', () => {
    const component = renderer.create(
      <Dropdown
        name={id}
        id={id}
        onChange={onChange}
        items={items}
        labelText="labelText_test"
      />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
