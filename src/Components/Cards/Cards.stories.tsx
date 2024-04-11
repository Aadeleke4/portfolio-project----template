import React from 'react';
import { Meta, Story } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Card, { CardProps } from './Cards';

export default {
  title: 'Components/Card',
  component: Card,
  argTypes: {
    title: { control: 'text' },
    content: { control: 'text' },
    hasHover: { control: 'boolean' },
  },
} as Meta;

const WithHover = (args: CardProps) => (
  <div
    onMouseEnter={() => {
      action('hover')(true);
    }}
    onMouseLeave={() => {
      action('hover')(false);
    }}
  >
    <Card {...args} />
  </div>
);

const WithoutHover = (args: CardProps) => <Card {...args} />;

export const Default = WithHover.bind({});
Default.args = {
  title: 'Sample Card Title',
  content: 'This is a sample card content. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  hasHover: true,
};

export const WithoutHoverStory = WithoutHover.bind({});
WithoutHoverStory.args = {
  title: 'Another Card Title',
  content: 'This card does not have the hover effect.',
  hasHover: false,
};