import { Center, Text, Title } from "@mantine/core";

function Error() {
  return (
    <Center mt={'xl'} style={{
        display:'flex',
        flexDirection:'column'
    }}>
      <Title order={1} style={{
        color: 'var(--mantine-color-red-9)'
      }}>404</Title>
      <Title order={4} style={{
        color: 'var(--mantine-color-red-9)'
      }}>Status</Title>
      <Text order={5} style={{
        color: 'var(--mantine-color-blue-9)'
      }}>Something went wrong</Text>
    </Center>
  );
}

export default Error;
