import React, { Component, Fragment } from 'react';
import YouTube from 'react-youtube';
import MaterialIcon from 'material-icons-react';
import options from './youtubeVars';

class YoutubeControlPlayer extends Component {
  constructor(props) {
    super(props);
    this.state = { isMuted: false, playerState: -1};
    this.playerTarget = null;
    this.onChangeRemote = this.props.onChangeRemote;
    
    // youtube 플레이어 상태
    // -1 –시작되지 않음
    // 0 – 종료
    // 1 – 재생 중
    // 2 – 일시중지
    // 3 – 버퍼링
    // 5 – 동영상 신호
  }

  handlePlay = () => {
    const { playerTarget, onChangeRemote } = this;
    const callback = (player) => { player.playVideo(); };
    playerTarget.playVideo();
    onChangeRemote(callback);
  }

  handleStop = () => {
    const { playerTarget, onChangeRemote } = this;
    const callback = (player) => { player.stopVideo(); };
    playerTarget.stopVideo();
    onChangeRemote(callback);
  }

  handlePause = () => {
    const { playerTarget, onChangeRemote } = this;
    const callback = (player) => { player.pauseVideo(); };
    playerTarget.pauseVideo();
    onChangeRemote(callback);
  }

  handleMute = () => {
    const { playerTarget, onChangeRemote } = this;
    const callback = (player) => { player.mute(); };
    playerTarget.mute();
    onChangeRemote(callback);
    this.setState({isMuted: true});
  }

  handleUnMute = () => {
    const { playerTarget, onChangeRemote } = this;
    const callback = (player) => { player.unMute(); };
    playerTarget.unMute();
    onChangeRemote(callback);
    this.setState({isMuted: false});
  }

  handleSeek = () => {
    const { onChangeRemote } = this;
    const callback = (player) => { player.seekTo(this.playerTarget.getCurrentTime()); };
    onChangeRemote(callback);
  }

  handleChangeState = (e) => {
    this.setState({...this.state, playerState: e.data});
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('+++shouldComponentUpdate', nextProps, this.props, nextProps.currentTime, this.playerTarget);
    const { videoId } = this.props;
    const nextVideoId = nextProps.videoId;

    if (nextVideoId !== videoId) {
      this.playerTarget.stopVideo();
    }

    return true;
  }

  componentWillUnmount() {
    console.log('componentWillUnmount', this.props);
    this.playerTarget.destroy();
  }

  render() {
    console.log('render', this.state);
    const { handleChangeState, handlePlay, handlePause, handleStop, handleMute, handleUnMute, handleSeek } = this;
    const { videoId, onSync } = this.props;
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
      <Fragment>
        <div className="wrap-controller">
          <button
            type="button"
            className="button default small fitted"
            onClick={() => {
              playButtonAction();
            }}>
            { playButtonLabel }
          </button>
          <button
            type="button"
            className="button default small fitted"
            onClick={handleSeek}>
            재생구간 동기화
          </button>
          <button
            type="button"
            className="button default small fitted"
            onClick={() => {
              muteButtonAction();
            }}>
            {muteButtonLabel}
          </button>
          <button
            type="button"
            className="button default small fitted"
            onClick={() => {
              handleStop();
            }}>
            정지
          </button>
        </div>
        <YouTube
          videoId={videoId}
          opts={options}
          onReady={(e) => {
            console.log('onReady', e);
            this.playerTarget = e.target;
            console.log('ismuted', this.playerTarget.isMuted());
            this.setState({isMuted: this.playerTarget.isMuted()});
          }}
          onPlay={(e) => {console.log('onPlay', e);}}
          onPause={(e) => {console.log('onPause', e);}}
          onEnd={(e) => {console.log('onEnd', e);}}
          onError={(e) => {console.log('onError', e);}}
          onStateChange={(e) => {
            console.log('onStateChange', e);
            handleChangeState(e);
          }}
          onPlaybackRateChange={(e) => {console.log('onPlaybackRateChange', e);}}
          onPlaybackQualityChange={(e) => {console.log('onPlaybackQualityChange', e);}}
        />
      </Fragment>
    );
  }
}

export default YoutubeControlPlayer;



