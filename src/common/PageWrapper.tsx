import React from 'react';
import styled from 'styled-components';
import Header from './components/Header';

const Wrapper = styled.div`
  background-color: #000;
  width: 100%;
  min-height: 100vh;
  color: #a2a2a2;
`;

export default function PageWrapper({ children }: { children: JSX.Element }) {
  return (
    <Wrapper>
      <Header />
      {children}
    </Wrapper>
  );
}
