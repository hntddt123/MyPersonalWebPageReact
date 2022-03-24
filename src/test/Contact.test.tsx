import { shallow } from 'enzyme';
import Contact from '../components/Contact';

test('Contact renders', () => {
  const wrapper = shallow(<Contact />);
  expect(wrapper.exists()).toEqual(true);
});