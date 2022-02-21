import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';

test('Canary', () => {
  expect(1).toBe(1);
});

test('App renders', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.exists()).toEqual(true);
});
