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

export default function Summary() {
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
        <Typography sx={{ fontSize: '17px' }}>shamal iroshan</Typography>
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
        <Typography sx={{ fontSize: '17px' }}>02.10.2000</Typography>
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
        <Typography sx={{ fontSize: '17px' }}>
          Gonapola Junction, Horana, Srilanka
        </Typography>
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
        <Typography sx={{ fontSize: '17px' }}>+94 75 2736 788</Typography>
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
        <Typography sx={{ fontSize: '17px' }}>
          hello@shamaliroshan.com
        </Typography>
      </InfoContainer>
      <ButtonContainer>
        <CustomButton
          text="download CV"
          action={() =>
            window.open('https://document.shamaliroshan.com/CV.pdf', '_blank')
          }
        />
      </ButtonContainer>
    </>
  );
}
