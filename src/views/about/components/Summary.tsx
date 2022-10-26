import React from 'react';
import PersonIcon from '@mui/icons-material/Person';
import Typography from '@mui/material/Typography';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import styled from 'styled-components';
import CustomButton from '../../../common/components/CustomButton';
import { PRIMARY_BLUE } from '../../../utils/colors';
import { Config } from '../../home/types';

const InfoContainer = styled.div`
  border-bottom: 1px dashed hsla(0, 0%, 100%, 0.15);
  width: 90%;
  margin: 10px 0;
  padding: 10px 0;
  font-size: 20px;
  display: flex;
  align-items: center;
`;
const ButtonContainer = styled.div`
  margin-top: 30px;
  margin-bottom: 10px;
`;

interface SummaryProps {
  config?: Config;
}

export default function Summary({ config }: SummaryProps) {
  return (
    <>
      <InfoContainer>
        <PersonIcon
          sx={{
            width: 30,
            height: 30,
            marginRight: '15px',
            color: PRIMARY_BLUE,
          }}
        />
        <Typography sx={{ fontSize: '17px' }}>{config?.name}</Typography>
      </InfoContainer>
      <InfoContainer>
        <CalendarMonthIcon
          sx={{
            width: 30,
            height: 30,
            marginRight: '15px',
            color: PRIMARY_BLUE,
          }}
        />
        <Typography sx={{ fontSize: '17px' }}>{config?.dateOfBirth}</Typography>
      </InfoContainer>
      <InfoContainer>
        <LocationOnIcon
          sx={{
            width: 30,
            height: 30,
            marginRight: '15px',
            color: PRIMARY_BLUE,
          }}
        />
        <Typography sx={{ fontSize: '17px' }}>{config?.address}</Typography>
      </InfoContainer>
      <InfoContainer>
        <CallIcon
          sx={{
            width: 30,
            height: 30,
            marginRight: '15px',
            color: PRIMARY_BLUE,
          }}
        />
        <Typography sx={{ fontSize: '17px' }}>{config?.phone}</Typography>
      </InfoContainer>
      <InfoContainer>
        <EmailIcon
          sx={{
            width: 30,
            height: 30,
            marginRight: '15px',
            color: PRIMARY_BLUE,
          }}
        />
        <Typography sx={{ fontSize: '17px' }}>{config?.email}</Typography>
      </InfoContainer>
      <ButtonContainer>
        <CustomButton
          text="download CV"
          action={() => window.open(config?.cvURL, '_blank')}
        />
      </ButtonContainer>
    </>
  );
}
