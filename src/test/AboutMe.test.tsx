import { shallow } from 'enzyme';
import AboutMe from '../components/AboutMe';

describe('AboutMe component test', () => {
  let wrapper;

  beforeAll(() => {
    wrapper = shallow(<AboutMe />);
  });

  test('App renders', () => {
    const wrapper = shallow(<AboutMe />);
    expect(wrapper.exists()).toEqual(true);
  });
});