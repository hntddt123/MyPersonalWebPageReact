import { shallow } from 'enzyme';
import Footer from '../components/Footer';

describe('Footer component test', () => {
  let wrapper;

  beforeAll(() => {
    wrapper = shallow(<Footer />);
  });

  test('Footer renders', () => {
    expect(wrapper.exists()).toEqual(true);
  });
});