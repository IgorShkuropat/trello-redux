import React, { ReactNode } from 'react';
import styled from 'styled-components';

type Props = {
  children: ReactNode;
  color?: string;
  margin?: string;
  type?: string;
  onClick?: () => void;
};

export const Button = ({ children, color, margin, onClick }: Props) => (
  <>
    <StyledButton onClick={onClick} color={color} margin={margin} type="submit">
      <StyledButtonText>{children}</StyledButtonText>
    </StyledButton>
  </>
);
const StyledButton = styled.button<Props>`
  background-color: ${props => props.color || 'rgb(94, 162, 215)'};
  text-decoration-line: none;
  cursor: pointer;
  height: 1.5rem;
  border-radius: 0.2rem;
  border: none;
  &:hover {
    filter: brightness(0.9);
  }
  margin: ${props => props.margin || '0'};
  align-self: flex-start;
`;

const StyledButtonText = styled.span`
  color: #ffffff;
  font-size: 0.8rem;
  font-weight: 600;
`;
