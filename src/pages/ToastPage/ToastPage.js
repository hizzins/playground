import React from 'react';
import { Toast } from 'components';
import MaterialIcon from 'material-icons-react';
import './ToastPage.scss';

const ToastPage = () => {
  return (
    <div className="page toast-page">
      <Toast />
      <h4>Features</h4>
      <ul>
        <li><MaterialIcon icon="check" size={12} /> 타입별 토스트 메세지 UI </li>
        <li><MaterialIcon icon="check" size={12} /> 메세지 누적 </li>
      </ul>
    </div>
  )
};

export default ToastPage;
