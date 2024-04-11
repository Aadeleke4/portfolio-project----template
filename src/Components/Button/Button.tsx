import styled from 'styled-components';

const StyledButton = styled.button`
  background: ${(props) => props.backgroundColor};
  border-radius: 2px;
  border: 1px solid #000;
  color: #fff;
  margin: 0 1em;
  padding: 0.25em 1em;
`;

const Button = ({ children, backgroundColor, onClick, ...rest }) => {
  return (
    <StyledButton backgroundColor={backgroundColor} onClick={onClick} className="button" {...rest}>
      {children}
    </StyledButton>
  );
};

export default Button;