import { UnstyledButton, Group, Avatar, Text } from "@mantine/core";
import Button from "./Button";
import { useDispatch, useSelector } from "react-redux";
import { toggleFollowing } from "../redux/fetchPeopleSlice";
export default function UserCard({ profileData }) {
  const dispatch = useDispatch();
  const { following } = useSelector((store) => store.people);
  return (
    <>
      {profileData.map((profile) => (
        <UnstyledButton
          key={profile.id}
          style={{ margin: "var(--mantine-spacing-sm)" }}
        >
          <Group>
            <Avatar src={profile.avatar} radius="xl" />

            <div style={{ flex: 1 }}>
              <Text size="sm" fw={500}>
                {profile.name}
              </Text>

              <Text c="dimmed" size="xs">
                {profile.username}
              </Text>
            </div>
            <Button
              onClick={() =>
                dispatch(
                  toggleFollowing({
                    user_id: profile.id,
                    method: following.includes(profile.id)
                      ? "unfollow"
                      : "follow",
                  })
                )
              }
              radius="xl"
              name={following.includes(profile.id) ? "Following" : "Follow"}
            />
          </Group>
        </UnstyledButton>
      ))}
    </>
  );
}
