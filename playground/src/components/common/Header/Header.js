import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

const Header = () => (
  <header className="header">
    <div>
      <Link to="/">Hizzins</Link>
      <Link to="/carousel">Carousel</Link>
      <Link to="/file-uploader">File Uploader</Link>
    </div>
  </header>
);

export default Header;
