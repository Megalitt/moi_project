import type { Meta, StoryObj } from '@storybook/react';
import  MainPage  from './MainPage';
import 'app/styles/index.scss';

const meta = {
  title: 'pages/MainPage',
  component: MainPage,
} satisfies Meta<typeof MainPage>;

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