import React from 'react';
import { WebCamera } from 'components';
import MaterialIcon from 'material-icons-react';
import './WebrtcCameraPage.scss';

const WebrtcCameraPage = () => {
  return (
    <div className="page webrtc-page">

      <WebCamera />
      <h4>Features</h4>
      <ul>
        <li><MaterialIcon icon="check" size={12} /> 사진 찍기</li>
        <li><MaterialIcon icon="check" size={12} /> </li>
        <li><MaterialIcon icon="check" size={12} /> </li>
      </ul>
    </div>
  )
};

export default WebrtcCameraPage;
