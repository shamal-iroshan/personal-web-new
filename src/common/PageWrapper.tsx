import React, { useEffect } from 'react';
import styled from 'styled-components';
import Header from './components/Header';
import { BLACK, GRAY } from '../utils/colors';
import { useAppDispatch, useAppSelector } from '../store/types';
import {
  configActions,
  selectGetConfigLoading,
} from '../views/home/slice/configSlice';
import LoadingContainer from './components/LoadingContainer';

const Wrapper = styled.div`
  background-color: ${BLACK};
  width: 100%;
  min-height: 100vh;
  color: ${GRAY};
`;

export default function PageWrapper({ children }: { children: JSX.Element }) {
  const dispatch = useAppDispatch();
  const configIsLoading = useAppSelector(selectGetConfigLoading);

  useEffect(() => {
    dispatch(configActions.getConfig());
  }, [dispatch]);

  return (
    <Wrapper>
      <Header />
      {configIsLoading ? <LoadingContainer /> : children}
    </Wrapper>
  );
}
