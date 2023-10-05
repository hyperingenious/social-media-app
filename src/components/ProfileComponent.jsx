import { Card, Avatar, Text, Group, Button } from "@mantine/core";
import { useSelector } from "react-redux";

export default function ProfileComponent({ children }) {
  const { following, followers, posts, profileData } = useSelector(
    (store) => store.people
  );

  const stats = [
    { value: followers.length, label: "Followers" },
    { value: following.length, label: "Follows" },
    { value: posts.length, label: "Posts" },
  ];

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
          src={profileData.avatar}
          size={80}
          radius={80}
          mx="auto"
          mt={-30}
        />
        <Text ta="center" fz="lg" fw={500} mt="sm">
          {profileData.name}
        </Text>
        <Text ta="center" fz="sm" c="dimmed">
          @{profileData.username}
        </Text>
        <Group mt="md" justify="center" gap={30}>
          {items}
        </Group>
        {/* <Button fullWidth radius="md" mt="xl" size="md" variant="default">
          Follow
        </Button> */}
        {children}{" "}
      </Card>
    </>
  );
}
