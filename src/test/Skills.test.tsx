import { shallow } from 'enzyme';
import Skills from '../components/Skills';

test('Skills renders', () => {
  const wrapper = shallow(<Skills />);
  expect(wrapper.exists()).toEqual(true);
});