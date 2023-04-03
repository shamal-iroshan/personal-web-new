import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { ROUTE_HOME } from '../../../common/routes';

const NotfoundWrapper = styled.div`
  position: relative;
  height: 100vh;
  background: #030005;

  .notfound {
    position: absolute;
    left: 50%;
    top: 50%;
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    max-width: 767px;
    width: 100%;
    line-height: 1.4;
    text-align: center;
  }

  .notfound .notfound-404 {
    position: relative;
    height: 180px;
    margin-bottom: 20px;
    z-index: -1;
  }

  .notfound .notfound-404 h1 {
    position: absolute;
    left: 50%;
    top: 50%;
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    font-size: 224px;
    font-weight: 900;
    margin-top: 0px;
    margin-bottom: 0px;
    margin-left: -12px;
    color: #030005;
    text-transform: uppercase;
    text-shadow: -1px -1px 0px #4169e1, 1px 1px 0px #ff005a;
    letter-spacing: -20px;
  }

  .notfound .notfound-404 h2 {
    position: absolute;
    left: 0;
    right: 0;
    top: 110px;
    font-size: 42px;
    font-weight: 700;
    color: #fff;
    text-transform: uppercase;
    text-shadow: 0 2px 0 #4169e1;
    letter-spacing: 13px;
    margin: 0;
  }

  .notfound button {
    display: inline-block;
    text-transform: uppercase;
    color: #ff005a;
    text-decoration: none;
    border: 2px solid;
    background: transparent;
    padding: 10px 40px;
    font-size: 14px;
    font-weight: 700;
    -webkit-transition: 0.2s all;
    transition: 0.2s all;
    cursor: pointer;
  }

  .notfound button:hover {
    color: #4169e1;
  }

  @media only screen and (max-width: 767px) {
    .notfound .notfound-404 h2 {
      font-size: 24px;
    }
  }

  @media only screen and (max-width: 480px) {
    .notfound .notfound-404 h1 {
      font-size: 182px;
    }
  }
`;

export default function NoMatch() {
  const navigate = useNavigate();

  return (
    <NotfoundWrapper id="notfound">
      <div className="notfound">
        <div className="notfound-404">
          <h1>404</h1>
          <h2>Page not found</h2>
        </div>
        <button type="button" onClick={() => navigate(ROUTE_HOME)}>
          Homepage
        </button>
      </div>
    </NotfoundWrapper>
  );
}
