import React from 'react';
import Divider from '@mui/material/Divider';
import styled from 'styled-components';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import HotelIcon from '@mui/icons-material/Hotel';
import RepeatIcon from '@mui/icons-material/Repeat';
import Typography from '@mui/material/Typography';
import { PRIMARY_BLUE, SECONDARY_WHITE } from '../../../utils/colors';
import LinearProgressWithLabel from './LinearProgressWithLabel';
import CircularProgressWithLabel from './CircularProgressWithLabel';

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
const CircularProgressContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  @media all and (max-width: 700px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export default function SkillDetails() {
  return (
    <>
      <DetailContainer>
        <DetailSubTitle>
          programming <span>skills</span>
        </DetailSubTitle>
        <Divider sx={{ background: SECONDARY_WHITE, marginBottom: '20px' }} />
        <LinearProgressWithLabel label="JavaScript" value={80} />
        <LinearProgressWithLabel label="React" value={75} />
        <LinearProgressWithLabel label="Next.JS" value={70} />
        <LinearProgressWithLabel label="Nest.JS" value={50} />
        <LinearProgressWithLabel label="Express" value={60} />
      </DetailContainer>

      <DetailContainer>
        <DetailSubTitle>
          language <span>skills</span>
        </DetailSubTitle>
        <Divider sx={{ background: SECONDARY_WHITE, marginBottom: '20px' }} />
        <CircularProgressContainer>
          <CircularProgressWithLabel label="English" value={80} />
          <CircularProgressWithLabel label="Sinhala" value={95} />
          <CircularProgressWithLabel label="Tamil" value={20} />
        </CircularProgressContainer>
      </DetailContainer>

      <DetailContainer>
        <DetailSubTitle>
          education <span>timeline</span>
        </DetailSubTitle>
        <Divider sx={{ background: SECONDARY_WHITE, marginBottom: '20px' }} />
        <Timeline position="alternate">
          <TimelineItem>
            <TimelineOppositeContent
              sx={{ m: 'auto 0' }}
              align="right"
              variant="body2"
            >
              9:30 am
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot>
                <FastfoodIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: '12px', px: 2 }}>
              <Typography variant="h6" component="span">
                Eat
              </Typography>
              <Typography>Because you need strength</Typography>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent sx={{ m: 'auto 0' }} variant="body2">
              10:00 am
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot color="primary">
                <LaptopMacIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: '12px', px: 2 }}>
              <Typography variant="h6" component="span">
                Code
              </Typography>
              <Typography>Because it&apos;s awesome!</Typography>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot color="primary" variant="outlined">
                <HotelIcon />
              </TimelineDot>
              <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
            </TimelineSeparator>
            <TimelineContent sx={{ py: '12px', px: 2 }}>
              <Typography variant="h6" component="span">
                Sleep
              </Typography>
              <Typography>Because you need rest</Typography>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
              <TimelineDot color="secondary">
                <RepeatIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: '12px', px: 2 }}>
              <Typography variant="h6" component="span">
                Repeat
              </Typography>
              <Typography>Because this is the life you love!</Typography>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </DetailContainer>

      <DetailContainer>
        <DetailSubTitle>
          working <span>timeline</span>
        </DetailSubTitle>
        <Divider sx={{ background: SECONDARY_WHITE, marginBottom: '20px' }} />
        <Timeline position="alternate">
          <TimelineItem>
            <TimelineOppositeContent
              sx={{ m: 'auto 0' }}
              align="right"
              variant="body2"
            >
              9:30 am
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot>
                <FastfoodIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: '12px', px: 2 }}>
              <Typography variant="h6" component="span">
                Eat
              </Typography>
              <Typography>Because you need strength</Typography>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent sx={{ m: 'auto 0' }} variant="body2">
              10:00 am
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot color="primary">
                <LaptopMacIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: '12px', px: 2 }}>
              <Typography variant="h6" component="span">
                Code
              </Typography>
              <Typography>Because it&apos;s awesome!</Typography>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot color="primary" variant="outlined">
                <HotelIcon />
              </TimelineDot>
              <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
            </TimelineSeparator>
            <TimelineContent sx={{ py: '12px', px: 2 }}>
              <Typography variant="h6" component="span">
                Sleep
              </Typography>
              <Typography>Because you need rest</Typography>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
              <TimelineDot color="secondary">
                <RepeatIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: '12px', px: 2 }}>
              <Typography variant="h6" component="span">
                Repeat
              </Typography>
              <Typography>Because this is the life you love!</Typography>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </DetailContainer>
    </>
  );
}
