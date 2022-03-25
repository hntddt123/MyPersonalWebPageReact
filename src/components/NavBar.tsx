import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faGamepad, faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { ActionIcon, useMantineColorScheme, Menu, Button, Grid, Group } from '@mantine/core';

function NavBar() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = (colorScheme === 'dark');

  return (
    <Grid>
      <Grid.Col span={6}>
        <Group position="left">
          <ActionIcon
            variant="outline"
            color={dark ? 'blue' : 'yellow'}
            onClick={() => toggleColorScheme()}
            title="Toggle color scheme"
          >
            {dark
              ? <FontAwesomeIcon icon={faMoon} />
              : <FontAwesomeIcon icon={faSun} />
            }
          </ActionIcon>
        </Group>
      </Grid.Col>
      <Grid.Col span={6}>
        <Group position="right">
          <Menu
            control={<Button variant="subtle"><FontAwesomeIcon icon={faBars} /></Button>}
            placement="start"
            gutter={10}
          >
            <Menu.Item
              component="a"
              href="https://www.facebook.com/nientaiho"
              target="_blank"
            >
              <FontAwesomeIcon icon={faFacebook} size='2x' style={{ color: '#3b5998' }} />
            </Menu.Item>
            <Menu.Item
              component="a"
              href="https://twitter.com/NientaiHo"
              target="_blank"
            >
              <FontAwesomeIcon icon={faTwitter} size='2x' style={{ color: '#0084b4' }} />
            </Menu.Item>
            <Menu.Item
              component="a"
              href="https://www.linkedin.com/in/nientaiho"
              target="_blank"
            >
              <FontAwesomeIcon icon={faLinkedin} size='2x' style={{ color: '#0084b4' }} />
            </Menu.Item>
            <Menu.Item
              component="a"
              href="https://nientaigames.blogspot.com/"
              target="_blank"
            >
              <FontAwesomeIcon icon={faGamepad} size='2x' />
            </Menu.Item>
          </Menu>
        </Group>
      </Grid.Col>
    </Grid>
  );
}

export default NavBar;
