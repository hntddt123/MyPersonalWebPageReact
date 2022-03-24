import { shallow } from 'enzyme';
import Footer from '../components/Footer';

test('Footer renders', () => {
  const wrapper = shallow(<Footer />);
  expect(wrapper.exists()).toEqual(true);
});