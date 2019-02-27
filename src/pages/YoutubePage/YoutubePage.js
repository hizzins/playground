import React from 'react';
import { YoutubeControl } from 'components';
import MaterialIcon from 'material-icons-react';
import './YoutubePage.scss';

const YoutubePage = () => {
  return (
    <div className="page youtube-page">
      <YoutubeControl />
      <h4>Features</h4>
      <ul>
        <li><MaterialIcon icon="check" size={12} /> 유투브 주소로 리스트 생성(thumbnail, title 표시)</li>
        <li><MaterialIcon icon="check" size={12} /> javascript로  재생, 일시정지, 특정 구간 재생, 음소거, 음소거해지기능</li>
        <li><MaterialIcon icon="check" size={12} /> 유투브 영상 공유 & 공유받은 사람의 youtube 기능 컨트롤</li>
      </ul>
    </div>
  )
};

export default YoutubePage;
