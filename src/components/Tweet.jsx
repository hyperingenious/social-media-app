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
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addComment } from "../redux/fetchPeopleSlice";

export function Tweet({ postData }) {
  return (
    <>
      {postData.map((post) => (
        <TweetFullBody key={post.id} tweetData={post} />
      ))}
    </>
  );
}

function TweetFullBody({ tweetData }) {
  const [value, toggle] = useToggle([false, true]);
  const [comment, setComment] = useState("");
  const dispatch = useDispatch();

  return (
    <Card shadow="sm" withBorder radius="md" mt={"md"} className={styles.card}>
      <Card.Section className={styles.tweetHead}>
        <Avatar size={"lg"} src={tweetData.avatar} alt="it's me" />{" "}
        <div>
          <Text fw={500} size="md">
            {tweetData.name}
          </Text>
          <Text c="dimmed" size="sm">
            {tweetData.username}
          </Text>
        </div>
      </Card.Section>
      <Card.Section>
        <Text fz="md" ml={"sm"}>
          {tweetData.tweet}
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

            <Text>{tweetData.comment_count}</Text>
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
            <Text>{tweetData.like_count}</Text>
          </Group>
        </Group>
      </Card.Section>

      {/* Posting comment section */}
      {value ? (
        <>
          <Card>
            <Card.Section>
              <Group m={"xs"}>
                <Avatar src={tweetData.avatar} alt="it's me" />
                <Textarea
                  variant="unstyled"
                  onChange={(e) => setComment(e.target.value)}
                  value={comment}
                  withAsterisk
                  placeholder="Post a comment"
                />
              </Group>
              <Group justify="flex-end">
                <Button
                  name="Reply"
                  onClick={() => {
                    dispatch(
                      addComment({ comment: comment, postId: tweetData.postId })
                    );
                    setComment("");
                  }}
                />
              </Group>
            </Card.Section>
          </Card>
          {/* Comments Section */}
          <Title order={5}>Comments</Title>
          {tweetData.comments.map((comment) => (
            <Comment key={comment} comment={comment} styles={styles} />
          ))}{" "}
        </>
      ) : null}
    </Card>
  );
}
