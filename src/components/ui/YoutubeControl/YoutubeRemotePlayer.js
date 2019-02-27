import React, { Component, Fragment } from 'react';
import YouTube from 'react-youtube';
import options from './youtubeVars';
import MaterialIcon from 'material-icons-react';

class YoutubeRemotePlayer extends Component {
  constructor(props) {
    super(props);
    this.state = { isMuted: false, playerState: -1};
    this.playerTarget = null;
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('+++shouldComponentUpdate remote', nextProps, this.props, nextProps.currentTime, this.playerTarget);
    const { videoId } = this.props;
    const nextData = nextProps.data;
    const nextVideoId = nextProps.videoId;

    if (nextVideoId !== videoId) {
      this.playerTarget.stopVideo();
    } else if (nextData.isChangeControl) {
      console.log('동기화', nextProps);
      nextData.controlDetail(this.playerTarget);
      // this.playerTarget.seekTo(nextData.controlDetail.currentTime);
    }
    return true;
  }

  componentWillUnmount() {
    console.log('componentWillUnmount', this.props);
    this.playerTarget.destroy();
  }

  render() {
    console.log('render remote', this.state, this.props, options);
    const { videoId } = this.props;

    return (
      <Fragment>
        <YouTube
          videoId={videoId}
          opts={options}
          onReady={(e) => {
            console.log('onReady', e); this.playerTarget = e.target; this.playerTarget.playVideo()
          }}
          onPlay={(e) => {console.log('onPlay', e);}}
          onPause={(e) => {console.log('onPause', e);}}
          onEnd={(e) => {console.log('onEnd', e);}}
          onError={(e) => {console.log('onError', e);}}
          onStateChange={(e) => {console.log('onStateChange', e);}}
          onPlaybackRateChange={(e) => {console.log('onPlaybackRateChange', e);}}
          onPlaybackQualityChange={(e) => {console.log('onPlaybackQualityChange', e);}}
        />
      </Fragment>
    );
  }
}

export default YoutubeRemotePlayer;



