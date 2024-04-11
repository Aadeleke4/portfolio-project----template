import { render } from '@testing-library/react';
import { Default, Disabled } from './Button.stories'; // Import the storybook stories

describe('Button component', () => {
  test('renders the default button', () => {
    const { getByText } = render(<Default />);
    expect(getByText('Click me')).toBeInTheDocument();
  });

  test('displays the correct background color when disabled', () => {
    const { getByText } = render(<Disabled />);
    const button = getByText('Disabled');
    const disabledColor = '#000'; 
    expect(button).toHaveStyle(`background-color: ${disabledColor}`);
  });
});
