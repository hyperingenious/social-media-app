import { Button as TheButton } from "@mantine/core";

function Button({ radius = "md", name, color = "gray" }) {
  return (
    <TheButton variant="default" color={color} radius={radius}>
      {name}
    </TheButton>
  );
}
export default Button;
