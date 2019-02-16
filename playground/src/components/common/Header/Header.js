import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

const Header = () => (
  <header className="header">
    <div>
      <Link to="/">hizzin's UI library</Link>
    </div>
  </header>
);

export default Header;
