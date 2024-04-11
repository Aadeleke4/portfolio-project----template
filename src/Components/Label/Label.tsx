import React from 'react';
import { action } from '@storybook/addon-actions';

export interface LabelProps {
  text: string;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
}

const Label: React.FC<LabelProps> = ({ text, className, onClick, disabled }) => {
  const handleClick = () => {
    if (!disabled && onClick) {
      onClick();
      action('clicked')(text);
    }
  };

  return (
    <>
      <span
        className={className}
        onClick={handleClick}
        style={{ cursor: disabled ? 'not-allowed' : 'pointer' }}
      >
        {text}
      </span>
      <br />
    </>
  );
};

export default Label;