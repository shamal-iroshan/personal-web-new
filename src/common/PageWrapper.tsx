import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Header from './components/Header';
import { BLACK, GRAY } from '../utils/colors';
import { useAppDispatch, useAppSelector } from '../store/types';
import {
  configActions,
  selectConfig,
  selectGetConfigLoading,
} from '../views/home/slice/configSlice';
import LoadingContainer from './components/LoadingContainer';
import { ROUTE_MAINTENANCE } from './routes';

const Wrapper = styled.div`
  background-color: ${BLACK};
  width: 100%;
  min-height: 100vh;
  color: ${GRAY};
`;

export default function PageWrapper({ children }: { children: JSX.Element }) {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const configIsLoading = useAppSelector(selectGetConfigLoading);
  const config = useAppSelector(selectConfig);

  useEffect(() => {
    dispatch(configActions.getConfig());
  }, [dispatch]);

  useEffect(() => {
    if (config && config.underMaintenance) {
      navigate(ROUTE_MAINTENANCE, { replace: true });
    }
  }, [config, navigate]);

  return (
    <Wrapper>
      <Header />
      {configIsLoading ? <LoadingContainer /> : children}
    </Wrapper>
  );
}
