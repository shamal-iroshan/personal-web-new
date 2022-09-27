import React from 'react';
import styled from 'styled-components';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import { PRIMARY_BLUE, SECONDARY_WHITE } from '../../../utils/colors';
import SinglePost from '../../../common/components/SinglePost';
import portfolioData from '../../../utils/portfolioData';

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

function Portfolio() {
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
          Creative <span>portfolio</span>
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
          {portfolioData.data.map((item) => (
            <SinglePost
              key={item.id}
              image={item.image}
              text={item.description}
              link={item.link}
            />
          ))}
        </Grid>
      </Grid>
    </ContentContainer>
  );
}

export default Portfolio;
