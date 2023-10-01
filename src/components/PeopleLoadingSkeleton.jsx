import { Group, Skeleton } from "@mantine/core";

function PeopleLoadingSkeleton() {
  return (
    <>
      <Group>
        <Skeleton height={50} circle mb="xl" />
        <Skeleton height={8} radius="xl" />
        <Skeleton height={8} mt={6} radius="xl" />
        <Skeleton height={8} mt={6} width="70%" radius="xl" />
      </Group>
    </>
  );
}

export default PeopleLoadingSkeleton;
