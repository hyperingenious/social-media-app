import { Button as TheButton } from "@mantine/core";

function Button({onClick, radius = "md", name, color = "gray" }) {
  return (
    <TheButton m={'sm'} onClick={onClick} variant="default" color={color} radius={radius}>
      {name}
    </TheButton>
  );
}
export default Button;
