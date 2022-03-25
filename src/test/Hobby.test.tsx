import { shallow } from 'enzyme';
import Hobby from '../components/Hobby';

describe('Hobby component test', () => {
  let wrapper;

  beforeAll(() => {
    wrapper = shallow(<Hobby />);
  });

  test('Hobby renders', () => {
    expect(wrapper.exists()).toEqual(true);
  });
});