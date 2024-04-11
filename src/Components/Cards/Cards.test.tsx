import React from 'react';
import { render } from '@testing-library/react';
import Card, { CardProps } from './Cards';

describe('Card', () => {
  const defaultProps: CardProps = {
    title: 'Sample Card Title',
    content: 'This is a sample card content. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    hasHover: true,
  };

  const noHoverProps: CardProps = {
    title: 'Sample Card Title',
    content: 'This is a sample card content. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    hasHover: false,
  };

  it('should render a visible card', () => {
    const { container } = render(<Card {...defaultProps} />);
    expect(container.firstChild).toBeTruthy();
    expect(container.firstChild).toHaveStyle('visibility: visible');
    expect(container.firstChild).toHaveStyle('opacity: 1');
  });

  it('should not change the background color when the mouse enters or leaves the non-hover card', () => {
    const { container } = render(<Card {...noHoverProps} />);
    const cardContainer = container.firstChild as HTMLElement;
    const originalBackgroundColor = getComputedStyle(cardContainer).backgroundColor;

    fireEvent.mouseEnter(cardContainer);
    expect(cardContainer).toHaveStyle('background-color: ' + originalBackgroundColor);

    fireEvent.mouseLeave(cardContainer);
    expect(cardContainer).toHaveStyle('background-color: ' + originalBackgroundColor);
  });
});