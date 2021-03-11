import React from 'react';
import renderer from 'react-test-renderer';
import Footer from '.';

describe('footer unit test', () => {
  test('should render', () => {
    const component = renderer.create(<Footer />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
