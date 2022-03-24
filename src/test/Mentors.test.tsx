import { shallow } from 'enzyme';
import Mentors from '../components/Mentors';

test('Mentors renders', () => {
  const wrapper = shallow(<Mentors />);
  expect(wrapper.exists()).toEqual(true);
});