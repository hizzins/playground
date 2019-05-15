import React from 'react';
import { Slide } from 'components';
import './SlidePage.scss';
import MaterialIcon, {colorPalette} from 'material-icons-react';

const SlidePage = () => {
  return (
    <div id="slide-page" className="page">
      <Slide />
      <h4>Features</h4>
      <ul>
        <li><MaterialIcon icon="check" size={12} /> 이미지 슬라이드 애니메이션</li>
        <li><MaterialIcon icon="check" size={12} /> 좌, 우 강제 슬라이드</li>
        <li><MaterialIcon icon="check" size={12} /> 페이지네이션</li>
        <li><MaterialIcon icon="check" size={12} /> 반응형</li>
      </ul>
    </div>
  )
};

export default SlidePage;
