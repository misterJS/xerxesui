import type { Meta, StoryObj } from "@storybook/react";

import { Typography } from "./Typography";
import { loremMock } from "../../global/mock";

const meta = {
  title: "Content/Typography",
  component: Typography,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: { control: "color" },
  },
} satisfies Meta<typeof Typography>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Basic: Story = {
  args: {
    fontOption: "basic",
    children: loremMock
  },
};

export const Aesthetic: Story = {
  args: {
    fontOption: "aesthetic",
    children: loremMock
  },
};

export const Kids: Story = {
  args: {
    fontOption: "kids",
    children: loremMock
  },
};

export const Retro: Story = {
  args: {
    fontOption: "retro",
    children: loremMock
  },
};
