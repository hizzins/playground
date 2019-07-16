import React from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
import style from './Calendar.module.scss';
import CustomDatepickerInput from './CustomDatepickerInput';
import 'react-datepicker/dist/react-datepicker.css';

const Calendar = ({ date, minDate, maxDate, disable, onChangeDate }) => {
  return (
    <div className={style.wrapDatepicker}>
      <DatePicker
        customInput={<CustomDatepickerInput disable={disable} />}
        selected={date}
        disabled={false}
        onChange={onChangeDate}
        dropdownMode="select"
        dateFormat="yyyy-MM-dd"
        minDate={minDate}
        maxDate={maxDate}
      />
    </div>
  );
};

Calendar.propTypes = {
  date: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  minDate: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  maxDate: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  disable: PropTypes.bool,
  onChangeDate: PropTypes.func.isRequired,
};

Calendar.defaultProps = {
  minDate: '',
  maxDate: '',
  disable: false,
};

export default Calendar;
