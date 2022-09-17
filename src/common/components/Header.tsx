import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import {
  ROUTE_ABOUT,
  ROUTE_BLOG,
  ROUTE_CONTACT,
  ROUTE_HOME,
  ROUTE_PORTFOLIO,
} from '../routes';

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 900px;
  margin: auto;
  padding-top: 40px;
`;
const PageTitle = styled.h1`
  font-weight: 800;
  cursor: pointer;
`;
const LinkContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const StyledP = styled.p`
  color: #ffffff;
  font-size: 16px;
  margin-left: 30px;
  cursor: pointer;
`;

export default function Header() {
  const navigate = useNavigate();

  const navigatePage = (path: string) => {
    navigate(path, { replace: false });
  };

  return (
    <HeaderContainer>
      <PageTitle onClick={() => navigatePage(ROUTE_HOME)}>Shamal</PageTitle>
      <LinkContainer>
        <StyledP onClick={() => navigatePage(ROUTE_HOME)}>Home</StyledP>
        <StyledP onClick={() => navigatePage(ROUTE_ABOUT)}>About</StyledP>
        <StyledP onClick={() => navigatePage(ROUTE_PORTFOLIO)}>
          Portfolio
        </StyledP>
        <StyledP onClick={() => navigatePage(ROUTE_CONTACT)}>Contact</StyledP>
        <StyledP onClick={() => navigatePage(ROUTE_BLOG)}>Blog</StyledP>
      </LinkContainer>
    </HeaderContainer>
  );
}
