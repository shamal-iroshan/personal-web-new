import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import {
  ROUTE_ABOUT,
  ROUTE_CONTACT,
  ROUTE_HOME,
  ROUTE_PORTFOLIO,
} from '../../routes';

export default function Footer() {
  return (
    <>
      <div className="footer-wave-container">
        <svg viewBox="0 0 120 28">
          <defs>
            <filter id="goo">
              <feGaussianBlur
                in="SourceGraphic"
                stdDeviation="1"
                result="blur"
              />
              <feColorMatrix
                in="blur"
                mode="matrix"
                values="
                   1 0 0 0 0
                   0 1 0 0 0
                   0 0 1 0 0
                   0 0 0 13 -9"
                result="goo"
              />
              <feBlend in="SourceGraphic" in2="goo" />
            </filter>
            <path
              id="wave"
              d="M 0,10 C 30,10 30,15 60,15 90,15 90,10 120,10 150,10 150,15 180,15 210,15 210,10 240,10 v 28 h -240 z"
            />
          </defs>

          <use id="wave3" className="wave" xlinkHref="#wave" x="0" y="-2" />
          <use id="wave2" className="wave2" xlinkHref="#wave" x="0" y="0" />
        </svg>
      </div>
      <div
        style={{
          position: 'absolute',
          width: '100%',
          backgroundColor: '#694FC9',
        }}
      >
        <div className="container">
          <hr style={{ borderTop: '1px solid #fff' }} />
          <div className="row">
            <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 text-center">
              <div className="copyright">
                <div>
                  <p className="copyright-text">
                    Copyright &copy;
                    {` ${new Date().getFullYear()} `}
                    All rights reserved | This website is made with{' '}
                    <i className="far fa-heart" /> by Shamal
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
              <div className="footer-nav">
                <ul>
                  <li>
                    <Link to={ROUTE_HOME}>home</Link>
                  </li>
                  <li>
                    <Link to={ROUTE_ABOUT}>about</Link>
                  </li>
                  <li>
                    <Link to={ROUTE_PORTFOLIO}>portfolio</Link>
                  </li>
                  <li>
                    <Link to={ROUTE_CONTACT}>contact</Link>
                  </li>
                  <li>
                    <a href={process.env.REACT_APP_BLOG_URL}>blog</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
