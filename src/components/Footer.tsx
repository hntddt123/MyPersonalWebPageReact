import React from 'react';
import { Grid, Group, Title, Text } from '@mantine/core';
import { useHover } from '@mantine/hooks';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

function Footer() {
  const { hovered, ref } = useHover();

  return (
    <Grid>
      <Grid.Col span={5}>
        <Group position="left">
          <Title order={5}>Dream is your future reality</Title>
        </Group>
      </Grid.Col>
      <Grid.Col span={2}>
        <Group position="center" >
          <div ref={ref}>
            {hovered
              ? <Text
                variant="link"
                component="a"
                href="#Top"
                size='lg'
                color={'violet'}
              >
                <FontAwesomeIcon icon={faArrowUp} />
              </Text>
              :
              <Text
                variant="link"
                component="a"
                href="#Top"
                size='lg'
              >
                <FontAwesomeIcon icon={faArrowUp} color={'slateblue'}/>
              </Text>
            }
          </div>

        </Group>
      </Grid.Col>
      <Grid.Col span={5}>
        <Group position="right">
          <Title order={5}>&copy; Copyright 2022, Nien-Tai Ho</Title>
        </Group>
      </Grid.Col>
    </Grid>
  );
}

export default Footer;
