import type { Meta, StoryObj } from "@storybook/react";

import { Container } from "./Container";
import { loremMock } from "../../global/mock";

const meta = {
  title: "Layouting/Container",
  component: Container,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: { control: "color" },
  },
} satisfies Meta<typeof Container>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Mobile: Story = {
  args: {
    size: "mobile",
    children: loremMock
  },
};

export const Tablet: Story = {
  args: {
    size: "tablet",
    children: loremMock
  },
};

export const Pc: Story = {
  args: {
    size: "pc",
    children: loremMock
  },
};

export const SuperPc: Story = {
  args: {
    size: "superpc",
    children: loremMock
  },
};
