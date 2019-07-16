import React from 'react';
import PropTypes from 'prop-types';
import styles from './Input.module.scss';

const Input = ({ type, name, styleType, value, placeholder, onChange }) => {
  return (
    <input
      id={name}
      className={`${styles[styleType]} ${styles.input} input`}
      type={type}
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};

Input.propTypes = {
  type: PropTypes.string.isRequired,
  styleType: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

Input.defaultProps = {
  styleType: 'basic',
  name: '',
  placeholder: '',
  value: '',
};

export default Input;
