import { Title, Text, Grid } from '@mantine/core';

function Skills() {
  return (
    <div>
      <Title order={3}>🔬Skills</Title>
      <Title order={3}>Languages</Title>
      <Grid>
        <Grid.Col span={6}>
          <Title order={3}>Fluent in</Title>
          <Text>English</Text>
          <Text>Chinese</Text>
          <Text>Taiwanese</Text>
          <Text>Javascript</Text>
        </Grid.Col>
        <Grid.Col span={6}>
          <Title order={3}>Familiar with</Title>
          <Text>Japanese</Text>
          <Text>C++</Text>
          <Text>Java</Text>
        </Grid.Col>
      </Grid>
      <Grid>
        <Grid.Col span={12}>
          <Title order={3}>Behavior</Title>
          <Text>Growth Mindset</Text>
        </Grid.Col>
      </Grid>
    </div>
  );
}

export default Skills;
