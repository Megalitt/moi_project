import type { Meta, StoryObj } from '@storybook/react';
import { Loader } from './Loader';
import 'app/styles/index.scss';

const meta = {
  title: 'widgets/Loader',
  component: Loader,
} satisfies Meta<typeof Loader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {
    
  },
};

export const Dark: Story = {
  args: {
    
  },
};