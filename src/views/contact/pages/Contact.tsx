import React from 'react';
import styled from 'styled-components';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
import { PRIMARY_BLUE, SECONDARY_WHITE } from '../../../utils/colors';
import ContactForm from '../components/ContactForm';

const ContentContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-top: 150px;
`;
const TitleText = styled.h2`
  text-transform: capitalize;
  margin-bottom: 15px;
  font-size: 30px;
  font-weight: 800;
  color: ${SECONDARY_WHITE};
  span {
    color: ${PRIMARY_BLUE};
  }
  @media all and (max-width: 1400px) {
    font-size: 22px;
  }
`;
const DetailContainer = styled.div`
  width: 100%;
  height: auto;
  background-color: #222;
  border-radius: 10px;
  padding: 10px;
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  overflow: hidden;
  p {
    color: ${SECONDARY_WHITE};
    margin-left: 10px;
  }
`;

function Contact() {
  return (
    <ContentContainer>
      <Grid
        sx={(theme) => ({
          width: '900px',
          [theme.breakpoints.down('md')]: {
            width: '90%',
          },
        })}
      >
        <TitleText>
          get in <span>touch</span>
        </TitleText>
        <Divider
          sx={{
            background: SECONDARY_WHITE,
            marginBottom: '50px',
            width: '100%',
          }}
        />
        <Grid
          container
          columnSpacing={3}
          sx={{
            margin: '0 24px 48px',
            width: 'unset',
            flexWrap: 'wrap',
            gap: '30px',
          }}
        >
          <Grid lg={4} md={12} sm={12} xs={12}>
            <DetailContainer>
              <LocationOnIcon
                sx={{
                  width: 30,
                  height: 30,
                  marginRight: '15px',
                  color: PRIMARY_BLUE,
                }}
              />
              <p>Gonapola Junction, Horana, Srilanka</p>
            </DetailContainer>
            <DetailContainer>
              <CallIcon
                sx={{
                  width: 30,
                  height: 30,
                  marginRight: '15px',
                  color: PRIMARY_BLUE,
                }}
              />
              <p>+94 75 2736 788</p>
            </DetailContainer>
            <DetailContainer>
              <EmailIcon
                sx={{
                  width: 30,
                  height: 30,
                  marginRight: '15px',
                  color: PRIMARY_BLUE,
                }}
              />
              <p>hello@shamaliroshan.com</p>
            </DetailContainer>
          </Grid>
          <Grid lg={7} md={12} sm={12} xs={12}>
            <ContactForm />
          </Grid>
        </Grid>
      </Grid>
    </ContentContainer>
  );
}

export default Contact;
