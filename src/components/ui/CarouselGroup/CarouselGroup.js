import React, { Component } from 'react';
import MaterialIcon, {colorPalette} from 'material-icons-react';
import $ from 'jquery';
import './CarouselGroup.scss';
import PropTypes from "prop-types";

class CarouselGroup extends Component {
  constructor(props) {
    super(props);
    this.state = { direction: 'left', next: 1, active: 0 };
    this.CarouselTimer = null;
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
    const profiles = this.props.profiles;

    return (
      <div id="carousel-group" >
        <div className="channel-list" data-is-full="true" data-is-open-room="true" data-is-lock="false">
          <article className="channel-item full">
            <div className="channel-item-inner-wrap">
              <h2>마우스를 올려주세요.</h2>
            </div>
          </article>

          <div className="hover-box" data-wrapper="wrapper-0" data-idx="0">
            <div className="hover-box-inner-wrap">
              <div className="hover-body">
                <ul id="channelCarousel0" className="attendee-group channel-carousel channel-carousel0">
                  {
                    profiles.map((item, i) => {
                      return (
                        <li className="attendee-0 attendee-list photo-box" data-unit="attendee-0" key={i}>
                          <span className="photo">
                            <img src={require(`contents/image/${item.image}`)} width="100%" alt={item.name} />
                          </span>
                          <span className="name">{item.name}</span>
                        </li>
                      )
                    })
                  }
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
CarouselGroup.propTypes = {
  profiles: PropTypes.array
};

CarouselGroup.defaultProps = {
  profiles: [
        {"id": "puppy1", "image": "puppy1.jpg", "name": "puppy1"},
        {"id": "puppy2", "image": "puppy2.jpg", "name": "puppy2"},
        {"id": "puppy3", "image": "puppy3.jpg", "name": "puppy3"},
        {"id": "puppy4", "image": "puppy4.jpg", "name": "puppy4"},
        {"id": "puppy5", "image": "puppy5.jpg", "name": "puppy5"},
        {"id": "puppy6", "image": "puppy6.jpg", "name": "puppy6"},
        {"id": "puppy7", "image": "puppy7.jpg", "name": "puppy7"},
        {"id": "puppy8", "image": "puppy8.jpg", "name": "puppy8"},
        {"id": "puppy9", "image": "puppy9.jpg", "name": "puppy9"}
      ]
};
export default CarouselGroup;
