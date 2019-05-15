import React from 'react';
import { Slide, CarouselGroup } from 'components';
import './CarouselPage.scss';
import MaterialIcon, {colorPalette} from 'material-icons-react';

const CarouselPage = () => {
  return (
    <div id="carousel-page" className="page">
      <div className="wrap-carousel-group">
        <CarouselGroup />
      </div>
      <h4>Features</h4>
      <ul>
        <li><MaterialIcon icon="check" size={12} />마우스 오버시 이미지 애니메이션</li>
        <li><MaterialIcon icon="check" size={12} />사진&이름 표기</li>
      </ul>
    </div>
  )
};

export default CarouselPage;
