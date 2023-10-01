import { IconHeart, IconMessage } from "@tabler/icons-react";
import {
  Card,
  Text,
  Group,
  ActionIcon,
  Avatar,
  Textarea,
  Title,
} from "@mantine/core";
import Button from "./Button";
import styles from "./Tweet.module.css";
import Comment from "./Comment";
import { useToggle } from "@mantine/hooks";

export function Tweet() {
  const [value, toggle] = useToggle([false, true]);

  return (
    <Card withBorder radius="md" mt={"md"} className={styles.card}>
      <Card.Section className={styles.tweetHead}>
        <Avatar size={"lg"}
          src="https://avatars.githubusercontent.com/u/10353856?s=460&u=88394dfd67727327c1f7670a1764dc38a8a24831&v=4"
          alt="it's me"
        />{" "}
        <div>
          <Text fw={500} size="md">
            Saurav Meghwal{" "}
          </Text>
          <Text c="dimmed" size="sm">
            @sauravmeghwal
          </Text>
        </div>
      </Card.Section>
      <Card.Section>
        <Text fz="md" ml={"sm"}>
          Completely renovated for the season 2020, Arena Verudela Bech
          Apartments are fully equipped and modernly furnished 4-star
          self-service apartments located on the Adriatic coastline by one of
          the most beautiful beaches in Pula.{" "}
        </Text>
      </Card.Section>
      <Card.Section>
        <Group ml={"sm"}>
          <Group gap={5}>
            <ActionIcon
              variant="light"
              color="blue"
              size="md"
              radius="xl"
              aria-label="Settings"
              onClick={() => toggle()}
            >
              <IconMessage
                style={{ width: "70%", height: "70%" }}
                stroke={1.5}
              />
            </ActionIcon>

            <Text>23</Text>
          </Group>
          <Group gap={5}>
            <ActionIcon
              variant="light"
              color="pink"
              size="md"
              radius="xl"
              aria-label="Settings"
            >
              <IconHeart style={{ width: "70%", height: "70%" }} stroke={1.5} />
            </ActionIcon>
            <Text>200</Text>
          </Group>
        </Group>
      </Card.Section>

      {/* Posting comment section */}
      {value ? (
        <>
          <Card>
            <Card.Section>
              <Group>
                <Avatar
                  src="https://avatars.githubusercontent.com/u/10353856?s=460&u=88394dfd67727327c1f7670a1764dc38a8a24831&v=4"
                  alt="it's me"
                />
                <Textarea
                  variant="unstyled"
                  withAsterisk
                  placeholder="Post a comment"
                />
              </Group>
              <Group justify="flex-end">
                <Button name="Post" />
              </Group>
            </Card.Section>
          </Card>
          {/* Comments Section */}
          <Title order={5}>Comments</Title>
          <Comment styles={styles} />{" "}
        </>
      ) : null}
    </Card>
  );
}
