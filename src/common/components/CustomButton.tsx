import React from 'react';
import styled from 'styled-components';

interface CustomButtonProps {
  text: string;
  action?: () => void;
}

const StyledButton = styled.button`
  text-transform: capitalize;
  color: #fff;
  display: inline-block;
  background-color: #4169e1;
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
