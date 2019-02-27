import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

const Header = () => (
  <header className="header">
    <div>
      <Link to="/">Hizzin's playground</Link>
    </div>
  </header>
);

export default Header;
