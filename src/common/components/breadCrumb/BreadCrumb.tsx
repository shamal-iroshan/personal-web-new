import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

interface BreadCrumbPropTypes {
  path: string[];
}

export default function BreadCrumb({ path }: BreadCrumbPropTypes) {
  return (
    <>
      <div>
        <div className="container">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to={process.env.PUBLIC_URL}>Home</Link>
            </li>
            {path.map((item, index) => (
              <li key={`breadcrumb-item-${index}`} className="breadcrumb-item">
                {item}
              </li>
            ))}
          </ol>
        </div>
      </div>
      <hr className="m-0" />
    </>
  );
}
