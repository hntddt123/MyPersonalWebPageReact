import { shallow } from 'enzyme';
import Hobby from '../components/Hobby';

test('Hobby renders', () => {
  const wrapper = shallow(<Hobby />);
  expect(wrapper.exists()).toEqual(true);
});