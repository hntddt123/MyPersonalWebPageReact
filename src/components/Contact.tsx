import { Title, Text } from '@mantine/core';

function Contact() {
  return (
    <div>
      <Title order={3} id="Contact">📇 Contact Info</Title>
      <Title order={4} id="Contact">
        <Text
          variant="link"
          component="a"
          href="mailto:nientaiho@gmail.com">
          nientaiho@gmail.com
        </Text>
      </Title>
    </div>
  );
}

export default Contact;
