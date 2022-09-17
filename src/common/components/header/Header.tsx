import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import {
  ROUTE_ABOUT,
  ROUTE_CONTACT,
  ROUTE_HOME,
  ROUTE_PORTFOLIO,
} from '../../routes';

/* Set the width of the sidebar to 250px (show it) */
function openNav() {
  const width = document.documentElement.clientWidth;
  if (width <= 400) {
    // @ts-ignore
    document.getElementById('mySidepanel').style.width = '100%';
  } else {
    // @ts-ignore
    document.getElementById('mySidepanel').style.width = '50%';
  }
}

/* Set the width of the sidebar to 0 (hide it) */
function closeNav() {
  // @ts-ignore
  document.getElementById('mySidepanel').style.width = '0';
}

export default function Header() {
  return (
    <div>
      <nav>
        <div id="main-menu" className="d-flex justify-content-center mt-2">
          <div className="m-3 mr-10">
            {/* eslint-disable-next-line no-undef */}
            <Link to={ROUTE_HOME}>
              <img
                src={`${process.env.PUBLIC_URL}/assets/img/home/logowithicon.png`}
                alt="logo"
              />
            </Link>
          </div>

          <div>
            <ul className="d-flex nav header-navigation">
              <Link to={ROUTE_ABOUT}>
                <li className="m-3">ABOUT</li>
              </Link>
              <Link to={ROUTE_PORTFOLIO}>
                <li className="m-3">PORTFOLIO</li>
              </Link>
              <Link to={ROUTE_CONTACT}>
                <li className="m-3">CONTACT</li>
              </Link>
              <a href={process.env.REACT_APP_BLOG_URL}>
                <li className="m-3">BLOG</li>
              </a>
            </ul>
          </div>
        </div>
        <div id="mobile-nav">
          <div id="mySidepanel" className="sidepanel">
            {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions */}
            <li className="closebtn" onClick={closeNav}>
              &times;
            </li>
            <Link to="/">
              {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions */}
              <li onClick={closeNav} className="m-3">
                Home
              </li>
            </Link>
            <Link to="/pages/about">
              {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions */}
              <li onClick={closeNav} className="m-3">
                ABOUT
              </li>
            </Link>
            <Link to="/pages/portfolio">
              {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions */}
              <li onClick={closeNav} className="m-3">
                PORTFOLIO
              </li>
            </Link>
            <Link to="/pages/contact">
              {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions */}
              <li onClick={closeNav} className="m-3">
                CONTACT
              </li>
            </Link>
            <a href="https://blog.shamaliroshan.com/">
              {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions */}
              <li onClick={closeNav} className="m-3">
                BLOG
              </li>
            </a>
          </div>

          <button className="openbtn" type="button" onClick={openNav}>
            &#9776; Menu
          </button>
        </div>
      </nav>
    </div>
  );
}
