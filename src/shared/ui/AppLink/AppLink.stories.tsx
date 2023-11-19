import type { Meta, StoryObj } from '@storybook/react';
import { AppLink, AppLinkTheme } from './AppLink';

import 'app/styles/index.scss';
import { RouterDecorator } from 'shared/config/storybook/RouteDecorator/RouteDecorator';

const meta = {
  title: 'widgets/AppLink',
  component: AppLink,
} satisfies Meta<typeof AppLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {
    children: 'eee',
    theme: AppLinkTheme.PRIMARY,
    to: '/'
  },
  decorators: [RouterDecorator],
};

export const Dark: Story = {
  args: {
    children: 'tttt',
    theme: AppLinkTheme.SECONDARY,
    to:'/'
  },
  decorators: [RouterDecorator],
};