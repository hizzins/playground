import React, { Component } from 'react';
import './Carousel.scss';
import MaterialIcon, {colorPalette} from 'material-icons-react';

class Carousel extends Component {
  constructor(props) {
    super(props);
    console.log('Carousel props', props);

    const slides = props.slides ? props.slides : [
      {"id": "slide1", "imageURL": "contents/image/background-1.jpg", "alt": "100% 웹브라우저 화상회의"},
      {"id": "slide2", "imageURL": "contents/image/background-2.jpg", "alt": "특허받은 회의실 객체를 이용한 ‘LOUNGE’ UX"},
      {"id": "slide3", "imageURL": "contents/image/background-3.jpg", "alt": "서로의 이해도를 높이는 화면 공유"},
      {"id": "slide4", "imageURL": "contents/image/background-4.jpg", "alt": "협업의 필수, 문서 공유"}
    ];

    this.state = { direction: 'left', next: 1, active: 0, slides};
    this.CarouselTimer = null;

  }

  handleJump = (nextIndex) => {
    const { handleRestart } = this;
    const direction = (nextIndex < this.state.next) ? 'right' : 'left';

    this.setState({ direction, next: nextIndex, active: this.state.next});
    handleRestart();
  }

  handleRestart = () => {
    const { handleStartCarousel } = this;
    const animationTarget = document.getElementsByClassName('item')[this.state.next];

    this.CarouselTimer && clearInterval(this.CarouselTimer);
    animationTarget.addEventListener('animationend', handleStartCarousel, {once : true});
  }

  handleNext = (e, isControld) => {
    e && e.preventDefault();
    const { handleRestart } = this;
    const { next, slides } = this.state;
    const length = slides.length -1;
    const newNext = (next + 1 > length) ? 0 : next + 1;
    const newActive = (next > length) ? 0 : next;

    this.setState({ direction: 'left', next: newNext, active: newActive});

    if (isControld) {
      handleRestart();
    }
  }

  handlePrev = (e) => {
    e && e.preventDefault();
    const { handleRestart } = this;
    const { next, slides } = this.state;
    const length = slides.length - 1;
    const newNext = (next - 1 < 0) ? length : next - 1;
    const newActive = (next < 0) ? length : next;

    this.setState({ direction: 'right', next: newNext, active: newActive});

    handleRestart();
  }

  handleStartCarousel = () => {
    const { handleNext } = this;
    this.CarouselTimer && clearInterval(this.CarouselTimer);
    this.CarouselTimer = setInterval(() => {      console.log('++++startCarousel');
      handleNext();
    }, 3000);
  }

  componentDidMount() {
    const { handleStartCarousel } = this;
    handleStartCarousel();
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    console.log('update', nextProps);
    return true;
  }

  componentWillUnmount() {
    clearInterval(this.CarouselTimer);
  }

  render() {
    const { handleNext, handlePrev, handleJump } = this;
    const { next, active, direction, slides } = this.state;

    return (
      <div id="choiceCarousel" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          {
            slides.map((item, i) => {
              const activeClass = (i === next) ? 'selected' : '';
              return (
                <li className={activeClass} key={i} onClick={() => { handleJump (i);}} />
              )
            })
          }
        </ol>

        <div className="carousel-inner">
          {
            slides.map((item, i) => {
              const nextClass = (i === next) ? 'next' : '';
              const activeClass = (i === active) ? 'active' : '';
              console.log('이미지', item.imageURL, '' + item.imageURL);
              return (
                <div id={item.id} className={`item idx-${i} ${direction} ${nextClass} ${activeClass}`} data-item="browser" key={i}>
                  <img src={require(`${item.imageURL}`)} alt={item.alt} />
                </div>
              )
            })
          }
        </div>

        <a className="left carousel-control" href="#choiceCarousel" data-slide="prev" onClick={(e) => { handlePrev(e); }}>
          <span className="btn-arrow btn-arrow-left"><MaterialIcon icon="arrow_back_ios" /></span>
        </a>
        <a className="right carousel-control" href="#choiceCarousel" data-slide="next" onClick={(e) => { handleNext(e, true); }}>
          <span className="btn-arrow btn-arrow-left"><MaterialIcon icon="arrow_back_ios" /></span>
        </a>
      </div>
    );
  }
}

export default Carousel;
