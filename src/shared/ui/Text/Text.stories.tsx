import type { Meta, StoryObj } from '@storybook/react';
import { Text } from './Text';
import 'app/styles/index.scss';

const meta = {
  title: 'shared/Text',
  component: Text,
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    title: 'text title',
    text: 'text text',
  },
};

export const onlyTitle: Story = {
  args: {
    title: 'text title',
  },
};

export const onlyText: Story = {
  args: {
    text: 'text text',
  },
};