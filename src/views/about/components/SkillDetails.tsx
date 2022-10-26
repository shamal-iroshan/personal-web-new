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
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import SchoolIcon from '@mui/icons-material/School';
import Typography from '@mui/material/Typography';
import { PRIMARY_BLUE, SECONDARY_WHITE } from '../../../utils/colors';
import LinearProgressWithLabel from './LinearProgressWithLabel';
import CircularProgressWithLabel from './CircularProgressWithLabel';
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
const CircularProgressContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  @media all and (max-width: 700px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

interface SummaryProps {
  config?: Config;
}

export default function SkillDetails({ config }: SummaryProps) {
  return (
    <>
      <DetailContainer>
        <DetailSubTitle>
          programming <span>skills</span>
        </DetailSubTitle>
        <Divider sx={{ background: SECONDARY_WHITE, marginBottom: '20px' }} />
        {config?.programmingSkills &&
          config.programmingSkills.map((el, index) => (
            <LinearProgressWithLabel
              key={el.name + index}
              label={el.name}
              value={el.value}
            />
          ))}
      </DetailContainer>

      <DetailContainer>
        <DetailSubTitle>
          language <span>skills</span>
        </DetailSubTitle>
        <Divider sx={{ background: SECONDARY_WHITE, marginBottom: '20px' }} />
        <CircularProgressContainer>
          {config?.languageSkills &&
            config.languageSkills.map((el, index) => (
              <CircularProgressWithLabel
                key={el.name + index}
                label={el.name}
                value={el.value}
              />
            ))}
        </CircularProgressContainer>
      </DetailContainer>

      <DetailContainer>
        <DetailSubTitle>
          education <span>timeline</span>
        </DetailSubTitle>
        <Divider sx={{ background: SECONDARY_WHITE, marginBottom: '20px' }} />
        <Timeline position="alternate">
          {config?.education &&
            config.education.map((el, index) => (
              <TimelineItem key={el.title + index}>
                <TimelineOppositeContent
                  sx={{ m: 'auto 0' }}
                  align="right"
                  variant="body2"
                >
                  {el.year}
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
                    {el.title}
                  </Typography>
                  <Typography>{el.description}</Typography>
                </TimelineContent>
              </TimelineItem>
            ))}
        </Timeline>
      </DetailContainer>

      <DetailContainer>
        <DetailSubTitle>
          working <span>timeline</span>
        </DetailSubTitle>
        <Divider sx={{ background: SECONDARY_WHITE, marginBottom: '20px' }} />
        <Timeline position="alternate">
          {config?.work &&
            config.work.map((el, index) => (
              <TimelineItem key={el.title + index}>
                <TimelineOppositeContent
                  sx={{ m: 'auto 0' }}
                  align="right"
                  variant="body2"
                >
                  {el.year}
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
                    {el.title}
                  </Typography>
                  <Typography>{el.description}</Typography>
                </TimelineContent>
              </TimelineItem>
            ))}
        </Timeline>
      </DetailContainer>
    </>
  );
}
