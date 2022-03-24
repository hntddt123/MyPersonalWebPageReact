import { Title, Text } from '@mantine/core';

function AboutMe() {
  return (
    <div>
      <Title order={3} id="AboutMe">
        👨‍💻 About Me
      </Title>
      <Text>
        I am software developer and I like to know the logic behind the scene
      </Text>
      <Text>
        75% of me is made out of code
      </Text>
      <Text>
        The rest 25%? You decide!
      </Text>
    </div>
  );
}

export default AboutMe;
