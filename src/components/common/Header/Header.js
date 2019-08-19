import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

const Header = ({title}) => (
  <header className="header">
    <div>
      <Link to="/">{title}</Link>
    </div>
  </header>
);

Header.deraultProps = {
  title: "Hizzin's playground"
};

export default Header;
