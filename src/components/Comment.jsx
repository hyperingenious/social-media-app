import { Card, Text } from "@mantine/core";

function Comment({ styles, comment }) {
  return (
    <>
      <Card.Section className={styles.tweetHead}></Card.Section>
      <Card.Section>
        <Text fz="sm" ml={"sm"}>
          {comment}
        </Text>
      </Card.Section>
    </>
  );
}

export default Comment;
