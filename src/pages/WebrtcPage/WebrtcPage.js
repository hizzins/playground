import React from 'react';
import { WebChat } from 'components';
import MaterialIcon from 'material-icons-react';
import './WebrtcPage.scss';

const WebrtcPage = () => {
  return (
    <div className="page webrtc-page">
      <WebChat />
      <h4>Features</h4>
      <ul>
        <li><MaterialIcon icon="check" size={12} /> 사진 찍기</li>
        <li><MaterialIcon icon="check" size={12} /> </li>
        <li><MaterialIcon icon="check" size={12} /> </li>
      </ul>
    </div>
  )
};

export default WebrtcPage;
