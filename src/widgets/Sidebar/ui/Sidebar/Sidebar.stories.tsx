import type { Meta, StoryObj } from '@storybook/react';
import { Sidebar } from './Sidebar';
import 'app/styles/index.scss';
import { RouterDecorator } from 'shared/config/storybook/RouteDecorator/RouteDecorator';

const meta = {
  title: 'widgets/Sidebar',
  component: Sidebar,
} satisfies Meta<typeof Sidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {
    
  },
  decorators: [RouterDecorator],
};

export const Dark: Story = {
  args: {
    
  },
  decorators: [RouterDecorator],
};