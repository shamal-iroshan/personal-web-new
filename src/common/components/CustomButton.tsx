import React from 'react';
import styled from 'styled-components';
import { PRIMARY_BLUE, SECONDARY_WHITE } from '../../utils/colors';

interface CustomButtonProps {
  text: string;
  action?: () => void;
  disable?: boolean;
}

const StyledButton = styled.button`
  text-transform: capitalize;
  color: ${SECONDARY_WHITE};
  display: inline-block;
  background-color: ${PRIMARY_BLUE};
  padding: 15px 40px;
  text-align: center;
  border-radius: 50px;
  font-size: 16px;
  cursor: pointer;
  outline: none;
  border: none;
  ':disabled' {
    opacity: 0.5;
  }
`;

export default function CustomButton({
  text,
  action,
  disable,
}: CustomButtonProps) {
  return (
    <StyledButton onClick={action} disabled={disable}>
      {text}
    </StyledButton>
  );
}
