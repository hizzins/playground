import React, { Component } from 'react';
import { Toast } from 'components';
import './Toast.scss';
import moment from 'moment';
import MaterialIcon from 'material-icons-react';

class ToastControl extends Component {
  constructor(props) {
    super(props);

    this.state = { inputMessage: '기본메세지입니다', toast: {} };
  }

  handleShowToast = (type) => {
    const message = this.state.inputMessage;
    const timestamp = moment().valueOf();
    const newToast = { ...this.state.toast, [timestamp]:  { message, type } };

    this.setState({toast: newToast});
  }

  handleHideToast = (timestamp) => {
    const toast = { ...this.state.toast };
    delete toast[timestamp];

    this.setState({...this.state.toast, toast});
  }

  handleChange = (e) => {
    const message = e.target.value;
    this.setState({inputMessage: message});
  }

  handleHideTimer = (timestamp) => {
    const { handleHideToast } = this;
    const $target = $(`.toast-${timestamp}`);

    $target.removeClass('show').addClass('hide');
    handleHideToast(timestamp);
  }

  render() {
    console.log('render', this.state);
    const { toast, inputMessage } = this.state;
    const { handleChange, handleShowToast, handleHideTimer } = this;
    return (
      <div id="Toast" className="Toast">
        <div className="wrap-toast-outer">
          {
            toast && Object.keys(toast).reverse().map((key, i) => {
              const item = toast[key];
              return (
                <Toast
                  key={key}
                  timestamp={key}
                  message={item.message}
                  type={item.type}
                  onHideTimer={handleHideTimer}
                />
              )
            })
          }
        </div>

        메세지 입력창:<input
          className="notice-message"
          type="text"
          value={inputMessage}
          max="100"
          onChange={(e) => {handleChange(e)}}
        />

        <div className="wrap-buttons">
          <button className="button primary round" type="button" onClick={() => handleShowToast('success') }>
            성공 메세지
          </button>
          <button className="button default round" type="button" onClick={() => handleShowToast('normal') }>
            예외 메세지
          </button>
          <button className="button danger round" type="button" onClick={() => handleShowToast('error') }>
            에러 메세지
          </button>
        </div>
      </div>
    );
  }
}

export default ToastControl;
