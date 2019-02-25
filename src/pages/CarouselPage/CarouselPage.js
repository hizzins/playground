import React from 'react';
import { Carousel, CarouselGroup } from 'components';
import './CarouselPage.scss';

const CarouselPage = () => {
  return (
    <div id="carousel-page" className="page">
      <Carousel />
      <div className="wrap-carousel-group">
        <CarouselGroup />
        <CarouselGroup />
        <CarouselGroup />
      </div>
    </div>
  )
};

export default CarouselPage;
