import React, { Component } from 'react';
import './Toast.scss';
import moment from 'moment';
import MaterialIcon from 'material-icons-react';

class Toast extends Component {
  constructor(props) {
    super(props);

    this.state = { inputMessage: '', toast: {} };
  }

  handleShowToast = (type) => {
    const message = this.state.inputMessage;
    const timestamp = moment().valueOf();
    const newToast = { [timestamp]:  { message, type } };

    this.setState({...this.state.toast, toast: newToast});
  }

  handleHideToast = (timestamp) => {
    const toast = { ...this.state.toast };
    delete toast[timestamp];

    this.setState({...this.state.toast, toast});
  }

  handleChange = (e) => {
    const message = e.target.value;
    this.setState({message});
  }

  render() {
    console.log('render');
    const { handleChange, handleShowToast } = this;
    return (
      <div id="Toast" className="Toast">
        <input type="text" onChange={(e) => {handleChange(e)}} />
        <button className="btn" type="button" onClick={() => handleShowToast('success') }>
          <MaterialIcon icon="done" />성공 메세지
        </button>
        <button type="button" onClick={() => handleShowToast('normal') }>
          <MaterialIcon icon="error" />예외 메세지
        </button>
        <button type="button" onClick={() => handleShowToast('error') }>
          <MaterialIcon icon="warning" />에러 메세지
        </button>
      </div>
    );
  }
}

export default Toast;
