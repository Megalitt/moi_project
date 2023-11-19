import type { Meta, StoryObj } from '@storybook/react';
import { ErrorPage } from './ErrorPage';
import 'app/styles/index.scss';

const meta = {
  title: 'widgets/ErrorPage',
  component: ErrorPage,
} satisfies Meta<typeof ErrorPage>;

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