import { Progress } from '@mantine/core';

export const ProgressBar = () => {
  return (
    <Progress.Root size="xl">
    <Progress.Section value={35} color="cyan">
      <Progress.Label>Documents</Progress.Label>
    </Progress.Section>
    <Progress.Section value={28} color="pink">
      <Progress.Label>Photos</Progress.Label>
    </Progress.Section>
    <Progress.Section value={15} color="orange">
      <Progress.Label>Other</Progress.Label>
    </Progress.Section>
  </Progress.Root>
  );
}