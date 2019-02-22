import React from 'react';
import { Carousel, CarouselGroup } from 'components';

const CarouselPage = () => {
  return (
    <div className="page">
      <Carousel />
      <CarouselGroup />
      <CarouselGroup />
      <CarouselGroup />
    </div>
  )
};

export default CarouselPage;
