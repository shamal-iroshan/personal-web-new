import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import BeatLoader from 'react-spinners/BeatLoader';
import { PRIMARY_BLUE, SECONDARY_WHITE } from '../../../utils/colors';
import SinglePost from '../../../common/components/SinglePost';
import { useAppDispatch, useAppSelector } from '../../../store/types';
import {
  portfolioActions,
  selectGetPortfolioLoading,
  selectPortfolios,
} from '../slice/portfolioSlice';
import { IPortfolio } from '../types';

const ContentContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-top: 150px;
`;

const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 150px;
  width: 100%;
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
  const dispatch = useAppDispatch();
  const [portfolioItems, setPortfolioItems] = useState<IPortfolio[]>([]);
  const portfolios = useAppSelector(selectPortfolios);
  const getPortfolioIsLoading = useAppSelector(selectGetPortfolioLoading);

  useEffect(() => {
    dispatch(portfolioActions.getPortfolios());
  }, [dispatch]);

  useEffect(() => {
    if (!getPortfolioIsLoading && portfolios.data.length > 0) {
      const temp = [...portfolios.data];
      temp.sort((item1, item2) => {
        return item1.order - item2.order;
      });
      setPortfolioItems(temp);
    }
  }, [getPortfolioIsLoading, portfolios]);

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
          {!getPortfolioIsLoading &&
            portfolioItems &&
            portfolioItems.length === 0 && <h2>No Portfolios Yet</h2>}

          {!getPortfolioIsLoading ? (
            portfolioItems &&
            portfolioItems.length > 0 &&
            portfolioItems.map((item) => (
              <SinglePost
                key={item.order}
                image={item.imageUrl}
                text={item.description}
                link={item.link}
              />
            ))
          ) : (
            <LoaderContainer>
              <BeatLoader color="#718096" margin={2} size={12} />
            </LoaderContainer>
          )}
        </Grid>
      </Grid>
    </ContentContainer>
  );
}

export default Portfolio;
