import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import './Button.scss';

const ButtonNavLink = ({ type, size, to, children }) => (
  <NavLink className={`btn btn-${type} btn-${size}`} to={to}>
    {children}
  </NavLink>
);

ButtonNavLink.propTypes = {
  children: PropTypes.string,
  type: PropTypes.string,
  size: PropTypes.string,
  to: PropTypes.string,
};

ButtonNavLink.defaultProps = {
  children: 'HOME',
  type: 'default',
  size: 'm',
  to: '/',
};

export default ButtonNavLink;
