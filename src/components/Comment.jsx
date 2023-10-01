import { Avatar, Card, Text } from "@mantine/core";

function Comment({ styles }) {
  return (
    <>
      <Card.Section className={styles.tweetHead}>
        <Avatar
          src="https://avatars.githubusercontent.com/u/10353856?s=460&u=88394dfd67727327c1f7670a1764dc38a8a24831&v=4"
          alt="it's me"
        />{" "}
        <div>
          <Text fw={500} size="sm">
            Saurav Meghwal{" "}
          </Text>
          <Text c="dimmed" size="xs">
            @sauravmeghwal
          </Text>
        </div>
      </Card.Section>
      <Card.Section>
        <Text fz="sm" ml={"sm"}>
          Completely renovated for the season 2020, Arena Verudela Bech
          Apartments are fully equipped and modernly furnished 4-star
          self-service apartments located on the Adriatic coastline by one of
          the most beautiful beaches in Pula.{" "}
        </Text>
      </Card.Section>
    </>
  );
}

export default Comment;
