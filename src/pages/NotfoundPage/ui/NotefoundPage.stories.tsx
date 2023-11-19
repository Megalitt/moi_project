import type { Meta, StoryObj } from '@storybook/react';
import  {NotefoundPage}  from './NotefoundPage';
import 'app/styles/index.scss';

const meta = {
  title: 'pages/NotefoundPage',
  component: NotefoundPage,
} satisfies Meta<typeof NotefoundPage>;

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