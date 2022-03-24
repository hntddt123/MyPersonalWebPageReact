import React from 'react';
import { Grid, Group, Title, Text } from '@mantine/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

function Footer() {
  return (
    <Grid>
      <Grid.Col span={4}>
        <Group position="left">
          <Title order={5}>Dream is your future reality</Title>
        </Group>
      </Grid.Col>
      <Grid.Col span={4}>
        <Group position="center">
          <Text
            variant="link"
            component="a"
            href="#Top"
            size='lg'
          >
            <FontAwesomeIcon href="#Top" icon={faArrowUp} />
          </Text>
        </Group>
      </Grid.Col>
      <Grid.Col span={4}>
        <Group position="right">
          <Title order={5}>&copy; Copyright 2022, Nien-Tai Ho</Title>
        </Group>
      </Grid.Col>
    </Grid>
  );
}

export default Footer;
