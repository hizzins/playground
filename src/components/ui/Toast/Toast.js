import React, { Component } from 'react';
import moment from 'moment';
import MaterialIcon from 'material-icons-react';

class Toast extends Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    const { timestamp, onHideTimer } = this.props;
    const $target = $(`.toast-${timestamp}`);

    setTimeout(() => {
      $target.addClass('show');
    }, 10);

    setTimeout(() => {
      onHideTimer(timestamp);
    }, 3010);
  }

  render() {
    const { message, type, timestamp } = this.props;

    let icon = '';

    if (type === 'success') {
      icon = 'check_circle';
    } else if (type === 'error') {
      icon = 'warning';
    } else {
      icon = 'error';
    }

    return (
      <div className={`wrap-toast toast-${timestamp}`}>
        <div className={`toast-inner ${type}`}>
          <MaterialIcon icon={icon} />
          <span>{message}</span>
        </div>
      </div>
    );
  }
}

export default Toast;
