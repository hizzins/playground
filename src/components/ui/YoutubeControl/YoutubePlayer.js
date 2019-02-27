import React, { Component, Fragment } from 'react';
import YouTube from 'react-youtube';
import MaterialIcon from 'material-icons-react';

class YoutubePlayer extends Component {
  constructor(props) {
    super(props);
    this.state = { isMuted: false, playerState: -1};
    this.playerTarget = null;
  }

  handleSetSync = () => {
    const { handlePlay, handlePause, handleStop, handleMute, handleUnMute } = this;
    const { onSync } = this.props;
    const { isMuted, playerState } = this.state;
    const playButtonLabel = playerState !== 1 ? '재생' : '일시정지';
    const muteButtonLabel = isMuted ? '소리켜기' : '소리끄기';
    const playButtonAction = () => {
      playerState !== 1 ? handlePlay() : handlePause();
    }
    const muteButtonAction = () => {
      isMuted ? handleUnMute() : handleMute();
    }

    return (
      <div className="wrap-controller">
        <button
          type="button"
          className="default small"
          onClick={() => {
            playButtonAction();
          }}>
          { playButtonLabel }
        </button>
        <button
          type="button"
          className="default small"
          onClick={() => {
            const currentTime = this.playerTarget.getCurrentTime();
            console.log('+++currentTime', currentTime);
            onSync(currentTime);
          }}>
          재생구간
        </button>
        <button
          type="button"
          className="default small"
          onClick={() => {
            playButtonAction();
          }}>
          {muteButtonLabel}
        </button>
      </div>
    )
  }

  handlePlay = () => {
    const { playerTarget } = this;
    playerTarget.playVideo();
  }

  handleStop = () => {
    const { playerTarget } = this;
    playerTarget.stopVideo();
  }

  handlePause = () => {
    const { playerTarget } = this;
    playerTarget.pauseVideo();
    console.log('+++여기', this.playerTarget.getPlayerState());
    this.setState({...this.state, playerState: this.playerTarget.getPlayerState()});
  }

  handleMute = () => {
    const { playerTarget } = this;
    playerTarget.mute();
  }

  handleUnMute = () => {
    const { playerTarget } = this;
    playerTarget.unMute();
  }

  handleChangeState = (e) => {
    this.setState({...this.state, playerState: e.data});
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('+++shouldComponentUpdate', nextProps, this.props, nextProps.currentTime, this.playerTarget);
    const { videoId } = this.props;
    const nextData = nextProps.data;
    const nextTarget = nextProps.target;
    const nextVideoId = nextProps.videoId;

    if (nextVideoId !== videoId) {
      this.playerTarget.stopVideo();
    } else if (nextTarget === 'remote' && nextData.isChangeControl) {
      console.log('동기화', nextProps);
      this.playerTarget.seekTo(nextData.controlDetail.currentTime);
    }
    return true;
  }

  componentWillUnmount() {
    console.log('componentWillUnmount', this.props);
    this.playerTarget.destroy();
  }

  render() {
    console.log('render', this.state);
    const { handleSetSync, handleChangeState } = this;
    const { videoId, target } = this.props;
    const opts = {
      height: '244',
      width: '399',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 1
      }
    };

    return (
      <Fragment>
        {
          target === 'control' && handleSetSync()
        }
        <YouTube
          videoId={videoId}
          opts={opts}
          onReady={(e) => {
            console.log('onReady', e); this.playerTarget = e.target; this.playerTarget.playVideo()
          }}
          onPlay={(e) => {console.log('onPlay', e);}}
          onPause={(e) => {console.log('onPause', e);}}
          onEnd={(e) => {console.log('onEnd', e);}}
          onError={(e) => {console.log('onError', e);}}
          onStateChange={(e) => {
            console.log('onStateChange', e);
            (target === 'control') && handleChangeState(e);
          }}
          onPlaybackRateChange={(e) => {console.log('onPlaybackRateChange', e);}}
          onPlaybackQualityChange={(e) => {console.log('onPlaybackQualityChange', e);}}
        />
      </Fragment>
    );
  }
}

export default YoutubePlayer;



