import React from 'react';
import { ToastControl } from 'components';
import MaterialIcon from 'material-icons-react';
import './ToastPage.scss';

const ToastPage = () => {
  return (
    <div className="page toast-page">
      <ToastControl />
      <h4>Features</h4>
      <ul>
        <li><MaterialIcon icon="check" size={12} /> 타입별 토스트 메세지 UI </li>
        <li><MaterialIcon icon="check" size={12} /> 메세지 애니메이션 </li>
        <li><MaterialIcon icon="check" size={12} /> 메세지 누적 & 여러줄 표현 가능 </li>
        <li><MaterialIcon icon="check" size={12} /> 메세지 사용자 입력(100자 제한) </li>
      </ul>
    </div>
  )
};

export default ToastPage;
