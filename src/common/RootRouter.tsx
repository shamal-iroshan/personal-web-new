import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import React, { useEffect } from 'react';
import {
  ROUTE_HOME,
  ROUTE_ABOUT,
  ROUTE_PORTFOLIO,
  ROUTE_CONTACT,
  ROUTE_MAINTENANCE,
} from './routes';
import Home from '../views/home/pages/Home';
import About from '../views/about/pages/About';
import Portfolio from '../views/portfolio/pages/Portfolio';
import Contact from '../views/contact/pages/Contact';
import NoMatch from '../views/noMatch/pages/NoMatch';
import PageWrapper from './PageWrapper';
import UnderMaintenance from '../views/underMaintenance/page/UnderMaintenance';

export default function RootRouter() {
  const location = useLocation();

  useEffect(() => {
    const mainBody = document.querySelector('main');
    mainBody?.scrollTo(0, 0);
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <Routes>
      <Route
        path={ROUTE_HOME}
        element={
          <PageWrapper>
            <Home />
          </PageWrapper>
        }
      />
      <Route
        path={ROUTE_ABOUT}
        element={
          <PageWrapper>
            <About />
          </PageWrapper>
        }
      />
      <Route
        path={ROUTE_PORTFOLIO}
        element={
          <PageWrapper>
            <Portfolio />
          </PageWrapper>
        }
      />
      <Route
        path={ROUTE_CONTACT}
        element={
          <PageWrapper>
            <Contact />
          </PageWrapper>
        }
      />
      <Route path={ROUTE_MAINTENANCE} element={<UnderMaintenance />} />
      <Route path="/" element={<Navigate to={ROUTE_HOME} replace />} />
      <Route path="*" element={<NoMatch />} />
    </Routes>
  );
}
