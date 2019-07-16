import React from 'react';
import PropTypes from 'prop-types';
import styles from './TimeInput.module.scss';

const TimeInput = ({ time, name, onChange }) => (
  <input className={styles.time} name={name} type="time" value={time} onChange={onChange} required />
);

TimeInput.propTypes = {
  time: PropTypes.string.isRequired,
  name: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

TimeInput.defaultProps = {
  name: '',
};

export default TimeInput;
