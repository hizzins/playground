import React from 'react';
import PropTypes from 'prop-types';
import './CustomDatepickerInput.scss';

const CustomDatepickerInput = ({ disabled, onClick, value }) => {
  console.log('CustomDatepickerInput', disabled, onClick, value);
  return (
    <button type="button" className="button-type" disabled={disabled} onClick={onClick}>
      {value}
      <i className="rsicon-schedule" />
    </button>
  );
};

CustomDatepickerInput.propTypes = {
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  value: PropTypes.string,
};

CustomDatepickerInput.defaultProps = {
  disabled: false,
  onClick: (e) => {
    console.log(`CustomDatepickerInput Click${e}`);
  },
  value: '',
};

export default CustomDatepickerInput;
