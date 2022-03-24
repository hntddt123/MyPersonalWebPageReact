import { shallow } from 'enzyme';
import NavBar from '../components/NavBar';

test('NavBar renders', () => {
  const wrapper = shallow(<NavBar />);
  expect(wrapper.exists()).toEqual(true);
});