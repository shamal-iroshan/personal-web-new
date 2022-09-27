import React from 'react';
import styled from 'styled-components';
import Header from './components/Header';
import { BLACK, GRAY } from '../utils/colors';

const Wrapper = styled.div`
  background-color: ${BLACK};
  width: 100%;
  min-height: 100vh;
  color: ${GRAY};
`;

export default function PageWrapper({ children }: { children: JSX.Element }) {
  return (
    <Wrapper>
      <Header />
      {children}
    </Wrapper>
  );
}
