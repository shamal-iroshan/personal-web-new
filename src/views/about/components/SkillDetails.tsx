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
import SchoolIcon from '@mui/icons-material/School';
import TaskIcon from '@mui/icons-material/Task';
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
              2016
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot color="primary">
                <TaskIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: '12px', px: 2 }}>
              <Typography variant="h6" component="span">
                O/L Examination
              </Typography>
              <Typography>
                Passed O/L examination with 4A, 4B, and 1C pass
              </Typography>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent
              sx={{ m: 'auto 0' }}
              align="right"
              variant="body2"
            >
              2017
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot color="primary">
                <SchoolIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: '12px', px: 2 }}>
              <Typography variant="h6" component="span">
                Diploma in IT
              </Typography>
              <Typography>
                Did the diploma on information technology at Esoft
              </Typography>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent
              sx={{ m: 'auto 0' }}
              align="right"
              variant="body2"
            >
              2017
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot color="primary">
                <SchoolIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: '12px', px: 2 }}>
              <Typography variant="h6" component="span">
                Diploma in English
              </Typography>
              <Typography>Did the diploma on English at Esoft</Typography>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent sx={{ m: 'auto 0' }} variant="body2">
              2019
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot color="primary">
                <TaskIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: '12px', px: 2 }}>
              <Typography variant="h6" component="span">
                A/L Examination
              </Typography>
              <Typography>
                Did A/L examination on technlogy stream and passed with 2B, and
                1C pass
              </Typography>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent sx={{ m: 'auto 0' }} variant="body2">
              2019
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
                Diploma in Software Engineering
              </Typography>
              <Typography>
                Followed the diploma in software engineering at IJSE
              </Typography>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent sx={{ m: 'auto 0' }} variant="body2">
              2022
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
                Degree in Software Engineering
              </Typography>
              <Typography>
                Started following the degree in software engineering at Esoft
              </Typography>
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
              2021/02 - 2021/06
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
                Intern
              </Typography>
              <Typography>
                Trained as a intern software engineer at Fcodelabs
              </Typography>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent sx={{ m: 'auto 0' }} variant="body2">
              2021/06 - 2022/10
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
                Associate Software Engineer
              </Typography>
              <Typography>
                Worked as an associate software engineer at Fcodelabs
              </Typography>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent sx={{ m: 'auto 0' }} variant="body2">
              2022/10 - preset
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
                Software Engineer
              </Typography>
              <Typography>
                Working as a software engineer at Fcodelabs
              </Typography>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </DetailContainer>
    </>
  );
}
