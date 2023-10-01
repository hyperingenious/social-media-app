import { SegmentedControl } from "@mantine/core";

function SegmentedButton({ data, onChange }) {
  return (
    <SegmentedControl size="md" radius="md" data={data} onChange={onChange} />
  );
}

export default SegmentedButton;
