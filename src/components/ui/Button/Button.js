import React from 'react';
import PropTypes from 'prop-types';

import './Button.scss';

const Button = ({ type, size, onClick, children, id, isDisable, customClass }) => {
  if (type === 'transparent') {
    return (
      <div
        id={id}
        className={`btn btn-${type} btn-${size} ${customClass} ${isDisable ? 'disabled' : ''}`}
        role="button"
        tabIndex={0}
        onKeyUp={(e) => {
          e.keyCode === 13 && onClick(e);
        }}
        onClick={(e) => {
          onClick(e);
        }}
      >
        {children}
      </div>
    );
  }
  return (
    <button
      id={id}
      className={`btn btn-${type} btn-${size} ${customClass}`}
      type="button"
      disabled={isDisable}
      onClick={(e) => {
        onClick(e);
      }}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object, PropTypes.string]),
  type: PropTypes.string,
  size: PropTypes.string,
  id: PropTypes.string,
  customClass: PropTypes.string,
  isDisable: PropTypes.bool,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  children: 'Button',
  type: 'default',
  size: 'auto',
  id: '',
  customClass: '',
  isDisable: false,
  onClick: (e) => {
    console.log(`Button Click ${e}`);
  },
};

export default Button;
