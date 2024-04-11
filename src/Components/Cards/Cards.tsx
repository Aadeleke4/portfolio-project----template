import { useState } from 'react';
import styled from 'styled-components';

// Define a styled card container
const CardContainer = styled.div`
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  padding: 16px;
  margin-bottom: 16px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`;

// Define a styled card title
const CardTitle = styled.h3`
  font-size: 18px;
  margin-bottom: 8px;
`;

// Define a styled card content
const CardContent = styled.p`
  font-size: 14px;
`;

// Card component
const Card = ({ title, content }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <CardContainer onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <CardTitle>{title}</CardTitle>
      {isHovered ? <CardContent>{content}</CardContent> : <CardContent>{content.slice(0, 50)}...</CardContent>}
    </CardContainer>
  );
};

export default Card;
