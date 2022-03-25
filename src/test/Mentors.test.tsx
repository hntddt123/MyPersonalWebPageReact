import { shallow } from 'enzyme';
import Mentors from '../components/Mentors';

describe('Mentors component test', () => {
  let wrapper;

  beforeAll(() => {
    wrapper = shallow(<Mentors />);
  });

  test('Mentors renders', () => {
    expect(wrapper.exists()).toEqual(true);
  });
});