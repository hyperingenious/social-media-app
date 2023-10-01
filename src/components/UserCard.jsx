import { UnstyledButton, Group, Avatar, Text } from "@mantine/core";
import Button from "./Button";
export default function UserCard() {
  return (
    <>
      <UnstyledButton style={{ margin: "var(--mantine-spacing-sm)" }}>
        <Group>
          <Avatar
            src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=255&q=80"
            radius="xl"
          />

          <div style={{ flex: 1 }}>
            <Text size="sm" fw={500}>
              Harriette Spoonlicker
            </Text>

            <Text c="dimmed" size="xs">
              Fullstack Engineer{" "}
            </Text>
          </div>
          <Button radius="xl" name={"Follow"} />
        </Group>
      </UnstyledButton>
    </>
  );
}
