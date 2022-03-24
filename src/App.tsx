import { useState } from 'react';

import {
  AppShell, Header, AspectRatio, Image, Title, Group, Container,
  Space, Text, MantineProvider, ColorSchemeProvider, ColorScheme, MantineThemeOverride
} from '@mantine/core';

import Footer from './components/Footer';
import Contact from './components/Contact';
import Projects from './components/Projects';
import NavBar from './components/NavBar';
import AboutMe from './components/AboutMe';
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
        <AppShell
          padding="md"
          header={(
            <Header height={60} p="xs">
              <NavBar />
            </Header>
          )}
        >
          <Title order={2} align='center'>
            Nien-Tai Ho
          </Title>
          <Space h='xs' />
          <AspectRatio ratio={4 / 3} sx={{ maxWidth: 250 }} mx="auto">
            <Image
              src={myWebPic}
              alt="MyPic"
              style={{ borderRadius: 10 }}
            />
          </AspectRatio>
          <Text align='center' weight={200}>
            Love the world of cutting edge technology in a world of wonder
          </Text>
          <Container p='xs'>
            <AboutMe />
          </Container>
          <Container p='xs'>
            <Skills />
          </Container>
          <Container p='xs'>
            <Hobby />
          </Container>
          <Container p='xs'>
            <Mentors />
          </Container>
          <Container p='xs'>
            <Projects />
          </Container>
          <Container p='xs'>
            <Group position="center">
              <Contact />
            </Group>
          </Container>
          <Footer />
        </AppShell>
      </MantineProvider>
    </ColorSchemeProvider >
  );
}

export default App;
