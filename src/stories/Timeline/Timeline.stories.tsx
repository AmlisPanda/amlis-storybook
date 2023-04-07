import { Meta, StoryObj } from "@storybook/react";

import Timeline from "./Timeline";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
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
