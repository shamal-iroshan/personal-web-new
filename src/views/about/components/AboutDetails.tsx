import React from 'react';
import Divider from '@mui/material/Divider';
import styled from 'styled-components';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ArrowRightRoundedIcon from '@mui/icons-material/ArrowRightRounded';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import { PRIMARY_BLUE, SECONDARY_WHITE } from '../../../utils/colors';

const DetailContainer = styled.div`
  width: 90%;
  padding: 10px 0;
  margin: 10px 0;
`;
const DetailSubTitle = styled.h3`
  color: ${SECONDARY_WHITE};
  text-transform: capitalize;
  font-size: 22px;
  span {
    color: ${PRIMARY_BLUE};
  }
`;
const AboutDescription = styled.p`
  font-size: 16px;
  span {
    color: ${SECONDARY_WHITE};
  }
`;

export default function AboutDetails() {
  return (
    <>
      <DetailContainer>
        <DetailSubTitle>
          About <span>me</span>
        </DetailSubTitle>
        <Divider sx={{ background: SECONDARY_WHITE, marginBottom: '20px' }} />
        <AboutDescription>
          Hello everybody! My name is <span>Shamal iroshan</span>. I am an
          software engineer with more than 1 year of industry experience in web
          application development, backend development and DevOps experience in
          AWS and GCP. And I’m interested in microcontrollers, electronics and
          robotics. Also, a hard-working individual that is seeking for new
          opportunities to increase my knowledge in this field.
        </AboutDescription>
      </DetailContainer>

      <DetailContainer>
        <DetailSubTitle>
          quality <span>service</span>
        </DetailSubTitle>
        <Divider sx={{ background: SECONDARY_WHITE, marginBottom: '20px' }} />
        <List>
          <ListItem>
            <ListItemIcon>
              <ArrowRightRoundedIcon sx={{ color: PRIMARY_BLUE }} />
            </ListItemIcon>
            <ListItemText>Website Development</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <ArrowRightRoundedIcon sx={{ color: PRIMARY_BLUE }} />
            </ListItemIcon>
            <ListItemText>Digital Experience</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <ArrowRightRoundedIcon sx={{ color: PRIMARY_BLUE }} />
            </ListItemIcon>
            <ListItemText>Content Marketing</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <ArrowRightRoundedIcon sx={{ color: PRIMARY_BLUE }} />
            </ListItemIcon>
            <ListItemText>Social Media Design</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <ArrowRightRoundedIcon sx={{ color: PRIMARY_BLUE }} />
            </ListItemIcon>
            <ListItemText>Shared Web Hosting</ListItemText>
          </ListItem>
        </List>
      </DetailContainer>
    </>
  );
}
