import React, { useState } from 'react';
import styled from 'styled-components';
import { styled as materialStyled } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import Drawer from '@mui/material/Drawer';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import MenuIcon from '@mui/icons-material/Menu';
import InfoIcon from '@mui/icons-material/Info';
import CollectionsIcon from '@mui/icons-material/Collections';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import BookIcon from '@mui/icons-material/Book';
import IconButton from '@mui/material/IconButton';
import {
  ROUTE_ABOUT,
  ROUTE_BLOG,
  ROUTE_CONTACT,
  ROUTE_HOME,
  ROUTE_PORTFOLIO,
} from '../routes';

const MaterialStyledGrid = materialStyled(Grid)(({ theme }) => ({
  maxWidth: '900px',
  margin: 'auto',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  paddingTop: '40px',
  [theme.breakpoints.down('md')]: {
    margin: '0 20px',
  },
})) as typeof Grid;
const LinkContainer = materialStyled(Grid)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  [theme.breakpoints.down('md')]: {
    display: 'none',
  },
})) as typeof Grid;
const MenuButton = materialStyled(IconButton)(({ theme }) => ({
  display: 'none',
  padding: '0',
  [theme.breakpoints.down('md')]: {
    display: 'flex',
  },
})) as typeof IconButton;
const PageTitle = styled.h1`
  font-weight: 800;
  cursor: pointer;
  color: #ffffff;
`;
const StyledP = styled.p`
  color: #ffffff;
  font-size: 16px;
  margin-left: 30px;
  cursor: pointer;
`;

export default function Header() {
  const navigate = useNavigate();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const navigatePage = (path: string) => {
    navigate(path, { replace: false });
  };

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }
      setIsDrawerOpen(open);
    };

  const list = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        <ListItem
          onClick={() => navigatePage(ROUTE_HOME)}
          key="home"
          disablePadding
        >
          <ListItemButton>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItemButton>
        </ListItem>
        <ListItem
          onClick={() => navigatePage(ROUTE_ABOUT)}
          key="about"
          disablePadding
        >
          <ListItemButton>
            <ListItemIcon>
              <InfoIcon />
            </ListItemIcon>
            <ListItemText primary="About" />
          </ListItemButton>
        </ListItem>
        <ListItem
          onClick={() => navigatePage(ROUTE_PORTFOLIO)}
          key="portfolio"
          disablePadding
        >
          <ListItemButton>
            <ListItemIcon>
              <CollectionsIcon />
            </ListItemIcon>
            <ListItemText primary="Portfolio" />
          </ListItemButton>
        </ListItem>
        <ListItem
          onClick={() => navigatePage(ROUTE_CONTACT)}
          key="contact"
          disablePadding
        >
          <ListItemButton>
            <ListItemIcon>
              <ContactPageIcon />
            </ListItemIcon>
            <ListItemText primary="Contact" />
          </ListItemButton>
        </ListItem>
        <ListItem
          onClick={() => navigatePage(ROUTE_BLOG)}
          key="blog"
          disablePadding
        >
          <ListItemButton>
            <ListItemIcon>
              <BookIcon />
            </ListItemIcon>
            <ListItemText primary="Blog" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <>
      <MaterialStyledGrid>
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
        <MenuButton onClick={toggleDrawer(true)}>
          <MenuIcon color="secondary" />
        </MenuButton>
      </MaterialStyledGrid>
      <Drawer anchor="left" open={isDrawerOpen} onClose={toggleDrawer(false)}>
        {list()}
      </Drawer>
    </>
  );
}
