import 'jsdom-global/register';
import { mount } from 'enzyme';
import NavBar from '../components/NavBar';
import { ColorScheme, ColorSchemeProvider } from '@mantine/core';

describe('NavBar component test', () => {
  let wrapper;

  beforeAll(() => {
    wrapper = mount(
      <ColorSchemeProvider
        colorScheme={'light'}
        toggleColorScheme={
          function (colorScheme?: ColorScheme): void {
          }}>
        <NavBar />);
      </ColorSchemeProvider>
    );
  });

  test('NavBar renders', () => {
    expect(wrapper.exists()).toEqual(true);
  });
});