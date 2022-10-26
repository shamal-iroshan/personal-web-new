import React from 'react';
import Divider from '@mui/material/Divider';
import styled from 'styled-components';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ArrowRightRoundedIcon from '@mui/icons-material/ArrowRightRounded';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import { PRIMARY_BLUE, SECONDARY_WHITE } from '../../../utils/colors';
import { Config } from '../../home/types';

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

interface SummaryProps {
  config?: Config;
}

export default function AboutDetails({ config }: SummaryProps) {
  return (
    <>
      <DetailContainer>
        <DetailSubTitle>
          About <span>me</span>
        </DetailSubTitle>
        <Divider sx={{ background: SECONDARY_WHITE, marginBottom: '20px' }} />
        <AboutDescription>{config?.aboutModalDescription}</AboutDescription>
      </DetailContainer>

      <DetailContainer>
        <DetailSubTitle>
          quality <span>service</span>
        </DetailSubTitle>
        <Divider sx={{ background: SECONDARY_WHITE, marginBottom: '20px' }} />
        <List>
          {config?.services &&
            config?.services.map((el, index) => (
              <ListItem key={el + index}>
                <ListItemIcon>
                  <ArrowRightRoundedIcon sx={{ color: PRIMARY_BLUE }} />
                </ListItemIcon>
                <ListItemText>{el}</ListItemText>
              </ListItem>
            ))}
        </List>
      </DetailContainer>
    </>
  );
}
