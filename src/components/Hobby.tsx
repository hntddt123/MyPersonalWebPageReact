import React from 'react';
import { Title, Text, List, ThemeIcon, Grid } from '@mantine/core';

function Hobby() {
  return (<div>
    <Title order={3}>🔆 What I love to do</Title>
    <Grid>
      <Grid.Col sm={4}>
        <Title order={4}>🎞 Movies & Animations</Title>
        <List
          withPadding
          spacing="xs"
          size="sm"
          center
          icon={<ThemeIcon color="green" size={8} radius="xl">
          </ThemeIcon>
          }
        >
          <List.Item><Text>Cowboy Bebop</Text></List.Item>
          <List.Item><Text>Ghost in the Shell</Text></List.Item>
          <List.Item><Text>Planetes</Text></List.Item>
          <List.Item><Text>Studio Ghibli</Text></List.Item>
        </List>
      </Grid.Col>
      <Grid.Col sm={4}>
        <Title order={4}>📈 Finance</Title>
        <List
          withPadding
          spacing="xs"
          size="sm"
          center
          icon={<ThemeIcon color="green" size={8} radius="xl">
          </ThemeIcon>
          }
        >
          <List.Item><Text>Stock Market</Text></List.Item>
        </List>
      </Grid.Col>
      <Grid.Col sm={4}>
        <Title order={4}>🎮 Video Games</Title>
        <List
          withPadding
          spacing="xs"
          size="sm"
          center
          icon={<ThemeIcon color="green" size={8} radius="xl">
          </ThemeIcon>
          }
        >
          <List.Item><Text>Half-Life series</Text></List.Item>
          <List.Item><Text>Metal Gear Solid series</Text></List.Item>
        </List>
      </Grid.Col>
    </Grid>
  </div>
  );
}

export default Hobby;
