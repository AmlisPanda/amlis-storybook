import { Meta, StoryObj } from "@storybook/react";

import Timeline from "../components/Timeline/Timeline";

const meta: Meta<typeof Timeline> = {
  title: "Data display/Timeline",
  component: Timeline,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof Timeline>;

export const TimelineExample: Story = {
  args: {},
};
