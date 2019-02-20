import React, { Component } from 'react';
import MaterialIcon, {colorPalette} from 'material-icons-react';
import $ from 'jquery';
import './CarouselGroup.scss';

class CarouselGroup extends Component {
  constructor(props) {
    super(props);
    this.state = { direction: 'left', next: 1, active: 0 };
    this.CarouselTimer = null;

    this.slides = [
      {id: 'slide1', imageURL: require('contents/image/background-1.jpg'), alt: "100% 웹브라우저 화상회의"},
      {id: 'slide2', imageURL: require('contents/image/background-2.jpg'), alt: "특허받은 회의실 객체를 이용한 ‘LOUNGE’ UX"},
      {id: 'slide3', imageURL: require('contents/image/background-3.jpg'), alt: "서로의 이해도를 높이는 화면 공유"},
      {id: 'slide4', imageURL: require('contents/image/background-4.jpg'), alt: "협업의 필수, 문서 공유"}
    ];
  }

  handleRenewal = (parent) => {
    var $wrapper = $(parent);
    var $carousel = $wrapper.find('.channel-carousel');

    for(var i = 0; i < 4; i++) {
      var $firstTarget = $carousel.find('li:nth-child(1)');
      var $lastTarget = $carousel.find('li:last-child');
      $firstTarget.insertAfter($lastTarget);
    }
    return true;
  };

  componentDidMount() {
    const { handleRenewal } = this;
    // 마우스 오버시 애니메이션
    $('.channel-list').hover(
      function () {
        var $this = $(this);
        var uniIdx = $this.find('.hover-box').data('idx');
        var $carousel = $this.find('.channel-carousel');

        if($carousel.find('li').length > 4) {
          $carousel.addClass('animation');
          // css 애니메이션 끝나면 유닛 재배열
          $carousel.find($('li')).bind('oanimationend animationend webkitAnimationEnd', function(event){
            $('.channel-carousel' + uniIdx).removeClass('animation');
            // 유닛 재배열
            if(handleRenewal($this.find('.hover-box'))) {
              $('.channel-carousel' + uniIdx).addClass('animation');
            }
          });
        }else {
          $this.find('.hover-box').addClass('no-animation');
        }
      },
      function() {
        var $this = $(this);
        var $carousel = $this.find('.channel-carousel');
        $carousel.removeClass('animation');
        $carousel.find($('li')).unbind('oanimationend animationend webkitAnimationEnd');
      });
  }

  componentWillUnmount() {
    clearInterval(this.CarouselTimer);
  }

  render() {
    const { handleNext, handlePrev, slides, handleJump } = this;
    const { next, active, direction } = this.state;

    return (
      <div id="carousel-group" >
        <div className="channel-list" data-is-full="true" data-is-open-room="true" data-is-lock="false">
            <article className="channel-item full">
              <div className="channel-item-inner-wrap">
                <h2>마우스를 올려보세요.</h2>
              </div>
            </article>

            <div className="hover-box" data-wrapper="wrapper-0" data-idx="0">
              <div className="hover-box-inner-wrap">
                <div className="hover-body">
                  <ul id="channelCarousel0" className="attendee-group channel-carousel channel-carousel0">
                    <li className="attendee-0 attendee-list photo-box" data-unit="attendee-0">
                      <span className="photo">
                        <img src="https://s3.amazonaws.com/uifaces/faces/twitter/abinav_t/128.jpg" width="100%" />
                      </span>
                      <span className="name">김철수1</span>
                    </li>
                    <li className="attendee-1 attendee-list photo-box" data-unit="attendee-1">
                      <span className="photo">
                        <img src="https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg" width="100%" />
                      </span>
                      <span className="name">김철수2</span>
                    </li>
                    <li className="attendee-2 attendee-list photo-box" data-unit="attendee-2">
                      <span className="photo">
                        <img src="https://s3.amazonaws.com/uifaces/faces/twitter/abinav_t/128.jpg" width="100%" />
                      </span>
                      <span className="name">김철수3</span>
                    </li>
                    <li className="attendee-3 attendee-list photo-box" data-unit="attendee-3">
                      <span className="photo">
                        <img src="https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg" width="100%" />
                      </span>
                      <span className="name">김철수4</span>
                    </li>
                    <li className="attendee-4 attendee-list photo-box" data-unit="attendee-4">
                      <span className="photo">
                        <img src="img/photo.png" width="100%" />
                      </span>
                      <span className="name">김철수5</span>
                    </li>
                    <li className="attendee-5 attendee-list photo-box" data-unit="attendee-5">
                      <span className="photo">
                        <img src="https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg" width="100%" />
                      </span>
                      <span className="name">김철수6</span>
                    </li>
                    <li className="attendee-6 attendee-list photo-box" data-unit="attendee-6">
                      <span className="photo">
                        <img src="https://s3.amazonaws.com/uifaces/faces/twitter/abinav_t/128.jpg" width="100%" />
                      </span>
                      <span className="name">김철수7</span>
                    </li>
                    <li className="attendee-7 attendee-list photo-box" data-unit="attendee-7">
                      <span className="photo">
                        <img src="https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg" width="100%" />
                      </span>
                      <span className="name">김철수8</span>
                    </li>
                    <li className="attendee-8 attendee-list photo-box" data-unit="attendee-8">
                      <span className="photo">
                        <img src="https://s3.amazonaws.com/uifaces/faces/twitter/abinav_t/128.jpg" width="100%" />
                      </span>
                      <span className="name">김철수9</span>
                    </li>
                    <li className="attendee-9 attendee-list photo-box" data-unit="attendee-9">
                      <span className="photo">
                        <img src="https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg" width="100%" />
                      </span>
                      <span className="name">김철수10</span>
                    </li>
                    <li className="attendee-10 attendee-list photo-box" data-unit="attendee-10">
                      <span className="photo">
                        <img src="https://s3.amazonaws.com/uifaces/faces/twitter/abinav_t/128.jpg" width="100%" />
                      </span>
                      <span className="name">김철수11</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
      </div>
    );
  }
}

export default CarouselGroup;
