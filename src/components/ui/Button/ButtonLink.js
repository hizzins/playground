import React from 'react';
import PropTypes from 'prop-types';

import './Button.scss';

const ButtonLink = ({ type, size, to, children, id }) => (
  <a href={to} id={id} className={`btn btn-${type} btn-${size}`}>
    {children}
  </a>
);

ButtonLink.propTypes = {
  children: PropTypes.string,
  type: PropTypes.string,
  size: PropTypes.string,
  to: PropTypes.string,
  id: PropTypes.string,
};

ButtonLink.defaultProps = {
  children: 'Button',
  type: 'default',
  size: 'm',
  to: '/',
  id: '',
};

export default ButtonLink;
