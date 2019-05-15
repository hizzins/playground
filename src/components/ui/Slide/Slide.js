import React, { Component } from 'react';
import './Slide.scss';
import MaterialIcon, {colorPalette} from 'material-icons-react';
import PropTypes from "prop-types";

class Slide extends Component {
  constructor(props) {
    super(props);
    console.log('Carousel props', props);

    this.state = { direction: 'left', next: 1, active: 0, slides: props.slides};
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
    const { next} = this.state;
    const { slides } = this.props;
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
    const { next } = this.state;
    const { slides } = this.props;
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
    const { next, active, direction } = this.state;
    const { slides } = this.props;
    console.log('++props',this.props, slides);
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
              console.log('이미지', item.image);
              return (
                <div id={item.id} className={`item idx-${i} ${direction} ${nextClass} ${activeClass}`} data-item="browser" key={i}>
                  <img src={require(`contents/image/${item.image}`)} alt={item.alt} />
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

Slide.propTypes = {
  slides: PropTypes.array
};

Slide.defaultProps = {
  slides: [
        {"id": "slide1", "image": "background-1.jpg", "alt": "100% 웹브라우저 화상회의"},
        {"id": "slide2", "image": "background-2.jpg", "alt": "특허받은 회의실 객체를 이용한 ‘LOUNGE’ UX"},
        {"id": "slide3", "image": "background-3.jpg", "alt": "서로의 이해도를 높이는 화면 공유"},
        {"id": "slide4", "image": "background-4.jpg", "alt": "협업의 필수, 문서 공유"}
      ]
};

export default Slide;
