import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  AppShell, Navbar, Header, AspectRatio, Image, Title,
  Space, Text, MantineProvider, ColorSchemeProvider, ColorScheme, MantineThemeOverride
} from '@mantine/core';

import Footer from './components/Footer';
import Contact from './components/Contact';
import Projects from './components/Projects';
import NavBar from './components/NavBar';
import AboutMe from './components/AboutMe';
import Profile from './components/Profile';
import Skills from './components/Skills';
import Hobby from './components/Hobby';
import Mentors from './components/Mentors';

import myWebPic from './images/myWebPic.jpg';

const font = 'Helvetica';

function getMyTheme(colorScheme: ColorScheme, font: String): MantineThemeOverride {
  return {
    colorScheme: colorScheme,
    fontFamily: font
  };
}

function App() {
  const [colorScheme, setColorScheme] = useState<ColorScheme>('dark');
  const toggleColorScheme = (value?: ColorScheme) => setColorScheme(
    value || (colorScheme === 'dark' ? 'light' : 'dark')
  );

  return (
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
      <MantineProvider theme={getMyTheme(colorScheme, font)} withGlobalStyles>
        <div className="App">
          <AppShell
            padding="md"
            navbar={(
              <Navbar width={{ base: 300 }} p="xs">
                <Navbar.Section>
                  <Title align='center'>
                    Nientai Ho
                  </Title>
                  <AspectRatio ratio={4 / 3} sx={{ maxWidth: 250 }} mx="auto">
                    <Image
                      src={myWebPic}
                      alt="MyPic"
                      style={{ borderRadius: 80 }}
                    />
                  </AspectRatio>
                </Navbar.Section>
                <Space h="lg" />
                <Navbar.Section>
                  <Text>
                    Love the world of cutting edge technology in a world of wonder
                  </Text>
                  <AboutMe />
                </Navbar.Section>
              </Navbar>
            )}
            header={(
              <Header height={80} p="xs">
                <NavBar />
              </Header>
            )}
          >
            <Profile />
            <Skills />
            <Hobby />
            <Mentors />
            <Projects />
            <Contact />
            <Footer />
          </AppShell>
        </div>
      </MantineProvider>
    </ColorSchemeProvider>
  );
}

export default App;
