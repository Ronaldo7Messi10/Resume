import * as React from 'react';
import '../css/home.css';
import { Link } from 'react-router-dom';
export default function Home() {
  return (
    <div className="home-main">
      <div className="header">
        <h1>Resume Maker</h1>
      </div>
      <Link to="/builder">
        {' '}
        <button className="build-resume-btn"> Build Your Resume </button>{' '}
      </Link>
    </div>
  );
}
