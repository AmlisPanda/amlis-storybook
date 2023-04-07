import { Meta, StoryObj } from "@storybook/react";

import Typography from "./Typography";

const meta: Meta<typeof Typography> = {
  title: "Data display/Typography",
  component: Typography,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Typography>;

export const Title: Story = {
  args: {
    text: "Earth is the third planet from the Sun and the only astronomical object known to harbor life. ",
    variant: "title1",
    color: "pink",
  },
};
