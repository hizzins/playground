import React, { Component } from 'react';
import './Carousel.scss';

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = { next: 1, active: 0 };
    this.CarouselTimer = null;

    this.slides = [
      {id: 'slide1', imageURL: require('contents/image/background-1.jpg'), alt: "배경이미지1"},
      {id: 'slide2', imageURL: require('contents/image/background-2.jpg'), alt: "배경이미지2"},
      {id: 'slide3', imageURL: require('contents/image/background-3.jpg'), alt: "배경이미지3"},
      {id: 'slide4', imageURL: require('contents/image/background-4.jpg'), alt: "배경이미지4"}
    ];
  }

  handleNext = (e) => {
    e && e.preventDefault();
    const { next } = this.state;
    const length = this.slides.length -1;
    const newNext = (next + 1 > length) ? 0 : next + 1;
    const newActive = (next > length) ? 0 : next;
    this.setState({ direction: 'left', next: newNext, active: newActive});
  }

  handlePrev = (e) => {
    e && e.preventDefault();
    const { next } = this.state;
    const length = this.slides.length -1;
    const newNext = (next - 1 < 0) ? length : next - 1;
    const newActive = (next < 0) ? length : next;
    this.setState({ direction: 'right', next: newNext, active: newActive});
  }

  handleStartCarousel = () => {
    const { handleNext } = this;
    this.CarouselTimer = setInterval(() => {      console.log('++++startCarousel');
      handleNext();
    }, 3500);
  }

  componentDidMount() {
    const { handleStartCarousel } = this;
    handleStartCarousel();
  }

  componentWillUnmount() {
    clearInterval(this.CarouselTimer);
  }

  render() {
    const { handleNext, handlePrev, slides } = this;
    const { next, active, direction } = this.state;

    console.log('+++render', next, active);

    return (
      <div id="choiceCarousel" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#choiceCarousel" data-slide-to="0" className="" />
          <li data-target="#choiceCarousel" data-slide-to="1" className="" />
          <li data-target="#choiceCarousel" data-slide-to="2" className="active" />
          <li data-target="#choiceCarousel" data-slide-to="3" className="" />
        </ol>

        <div className="carousel-inner">
          {
            slides.map((item, i) => {
              const nextClass = (i === next) ? 'next' : '';
              const activeClass = (i === active) ? 'active' : '';
              return (
                <div id={item.id} className={`item idx-${i} ${direction} ${nextClass} ${activeClass}`} data-item="browser" key={i}>
                  <img src={item.imageURL} alt={item.alt} />
                </div>
              )
            })
          }
        </div>

        <a className="left carousel-control" href="#choiceCarousel" data-slide="prev" onClick={(e) => { handlePrev(e); }}>
          <img className="btn-arrow-left" alt="prev" src={require('contents/image/back-arrow.png')} />
        </a>
        <a className="right carousel-control" href="#choiceCarousel" data-slide="next" onClick={(e) => { handleNext(e); }}>
          <img className="btn-arrow-right" alt="next" src={require('contents/image/back-arrow.png')}  />
        </a>
      </div>
    );
  }
}

export default Carousel;
