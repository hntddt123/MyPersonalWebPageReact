import { shallow } from 'enzyme';
import Skills from '../components/Skills';

describe('Skills component test', () => {
  let wrapper;

  beforeAll(() => {
    wrapper = shallow(<Skills />);
  });

  test('Skills renders', () => {
    expect(wrapper.exists()).toEqual(true);
  });
});
