import { Card, Avatar, Text, Group, Button } from "@mantine/core";

const stats = [
  { value: "34K", label: "Followers" },
  { value: "187", label: "Follows" },
  { value: "1.6K", label: "Posts" },
];

export default function ProfileComponent({ children }) {
  const items = stats.map((stat) => (
    <div key={stat.label}>
      <Text ta="center" fz="lg" fw={500}>
        {stat.value}
      </Text>
      <Text ta="center" fz="sm" c="dimmed" lh={1}>
        {stat.label}
      </Text>
    </div>
  ));

  return (
    <>
      <Card withBorder padding="xl" radius="md">
        <Avatar
          src="https://images.unsplash.com/photo-1623582854588-d60de57fa33f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80"
          size={80}
          radius={80}
          mx="auto"
          mt={-30}
        />
        <Text ta="center" fz="lg" fw={500} mt="sm">
          Saurav Meghwal
        </Text>
        <Text ta="center" fz="sm" c="dimmed">
          @sauravmeghwal
        </Text>
        <Group mt="md" justify="center" gap={30}>
          {items}
        </Group>
        <Button fullWidth radius="md" mt="xl" size="md" variant="default">
          Follow
        </Button>
        {children}{" "}
      </Card>
    </>
  );
}
