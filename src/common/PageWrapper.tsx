import React from 'react';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

export default function PageWrapper({ children }: { children: JSX.Element }) {
  return (
    <div>
      <Header />

      {children}

      {window.location.pathname !== '/' ? <Footer /> : ''}
    </div>
  );
}
