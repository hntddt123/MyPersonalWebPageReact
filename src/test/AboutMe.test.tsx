import { shallow } from 'enzyme';
import AboutMe from '../components/AboutMe';

test('AboutMe renders', () => {
  const wrapper = shallow(<AboutMe />);
  expect(wrapper.exists()).toEqual(true);
});