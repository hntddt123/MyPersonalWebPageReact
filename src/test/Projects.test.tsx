import { shallow } from 'enzyme';
import Projects from '../components/Projects';

test('Projects renders', () => {
  const wrapper = shallow(<Projects />);
  expect(wrapper.exists()).toEqual(true);
});