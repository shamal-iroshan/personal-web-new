import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import maintenanceImage from '../../../assets/img/maintenance.png';
import { useAppDispatch, useAppSelector } from '../../../store/types';
import { configActions, selectConfig } from '../../home/slice/configSlice';
import { ROUTE_HOME } from '../../../common/routes';

const MaintenanceWrapper = styled.div`
  padding: 8%;
  text-align: center;
  line-height: 30px;
  background-color: #000;
  height: 100vh;
  .txtblue {
    font-size: 20px;
    font-weight: 400;
    color: #0094ff;
  }
  .txtwhite {
    font-size: 20px;
    color: #fff;
  }
  .txtyellow {
    font-size: 20px;
    color: #ffd400;
  }
  .imgcenter {
    width: 20%;
  }
`;

export default function UnderMaintenance() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const config = useAppSelector(selectConfig);

  useEffect(() => {
    dispatch(configActions.getConfig());
  }, [dispatch]);

  useEffect(() => {
    if (config && !config.underMaintenance) {
      navigate(ROUTE_HOME, { replace: true });
    }
  }, [config, navigate]);

  return (
    <MaintenanceWrapper>
      <img src={maintenanceImage} className="imgcenter" alt="maintenance" />
      <p className="txtblue">
        My website is{' '}
        <span className="txtyellow">going through a maintenance</span> and will
        be available soon.
        <br />I request you to visit after some time.
      </p>
      <p className="txtwhite">
        <strong>Thank You!</strong> for visiting.
      </p>
    </MaintenanceWrapper>
  );
}
