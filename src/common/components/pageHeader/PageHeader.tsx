import React from 'react';

interface PageHeaderProps {
  title: string;
}

export default function PageHeader({ title }: PageHeaderProps) {
  return (
    <div
      className="d-flex align-items-center text-white"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/assets/img/header-bg.png)`,
        height: 200,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      <div className="container">
        <h1>{title}</h1>
      </div>
    </div>
  );
}
