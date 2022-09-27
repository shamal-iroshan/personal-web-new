import React from 'react';
import styled from 'styled-components';
import { PRIMARY_BLUE, SECONDARY_WHITE } from '../../utils/colors';

interface CustomButtonProps {
  text: string;
  action?: () => void;
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
`;

export default function CustomButton({ text, action }: CustomButtonProps) {
  return <StyledButton onClick={action}>{text}</StyledButton>;
}
