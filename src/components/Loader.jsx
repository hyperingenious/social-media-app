import { Center, Loader as MantineLoader } from "@mantine/core";

export default function Loader({ size = "md" }) {
  return (
    <Center mt={"xl"}>
      <MantineLoader size={size} color="blue" type="bars" />
    </Center>
  );
}
