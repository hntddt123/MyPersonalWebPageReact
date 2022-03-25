import { shallow } from 'enzyme';
import Contact from '../components/Contact';

describe('FooContactter component test', () => {
  let wrapper;

  beforeAll(() => {
    wrapper = shallow(<Contact />);
  });

  test('Contact renders', () => {
    expect(wrapper.exists()).toEqual(true);
  });
});