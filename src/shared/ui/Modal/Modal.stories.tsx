import type { Meta, StoryObj } from '@storybook/react';
import { Modal } from './Modal';
import 'app/styles/index.scss';

const meta = {
  title: 'shared/Modal',
  component: Modal,
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    isOpen: true,
    children: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis laborum maxime vel nihil cum aliquid fugiat, dicta voluptate? Dolor totam eum earum quos! Accusantium repudiandae aut doloribus, cum ipsam libero.',
  },
};
