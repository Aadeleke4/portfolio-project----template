import { Meta, Story } from '@storybook/react';
import React from 'react';
import Button, { ButtonProps } from './Button';

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    children: {
      control: 'text',
      defaultValue: 'Click me',
    },
    disabled: {
      control: 'boolean',
      defaultValue: false,
    },
    backgroundColor: {
      control: 'color',
      defaultValue: '#BF4F74',
    },
    onClick: { action: 'clicked' },
  },
} as Meta<typeof Button>;

export const Default = Template.bind({});
Default.parameters = {
  actions: {
    handles: ['onClick'],
  },
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};