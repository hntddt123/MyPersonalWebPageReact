import { shallow } from 'enzyme';
import Projects from '../components/Projects';

describe('Projects component test', () => {
  let wrapper;

  beforeAll(() => {
    wrapper = shallow(<Projects />);
  });

  test('Projects renders', () => {
    expect(wrapper.exists()).toEqual(true);
  });
});