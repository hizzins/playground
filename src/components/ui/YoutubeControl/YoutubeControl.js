import React, { Component } from 'react';
import { YoutubeControlPlayer, YoutubeRemotePlayer } from 'components';
// import getYoutubeTitle from 'get-youtube-title';
import './YoutubeControl.scss';

class YoutubeControl extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: 'https://www.youtube.com/watch?v=B6uuIHpFkuo',
      control: { isBindPlayer: false, playId: '' },
      remote: { isBindPlayer: false, playId: '', isChangeControl: false, controlDetail: {} },
      youtubeList: []
    };

    this.currentTime = 0;
  }

  handlePlayYoutube = (youtubeId) => {
    this.setState({control: {isBindPlayer: true, playId: youtubeId}});
  };

  handleShareYoutube = (youtubeId) => {
    const remoteState = {remote: {isBindPlayer: true, playId: youtubeId, isChangeControl: false}};
    const controlState = {control: {isBindPlayer: true, playId: youtubeId}};
    this.setState({...remoteState, ...controlState}, () => {console.log('+++++상태변경', this.state);});
  };

  handleUploadYoutube = () => {
    const { handleGetYoutubeId, handleGetYoutubeTitle } = this;
    const youtubeAddress = this.youtubeId.value;
    const youtubeId = handleGetYoutubeId(youtubeAddress);
    const oldList = this.state.youtubeList;
    console.log('+++youtubeId', youtubeId);
    // 유투브 타이틀 get
    handleGetYoutubeTitle(youtubeId).then((data) => {
      if (data.items.length && data.items[0].snippet) {
        const youtubeTitle = data.items[0].snippet.title;
        const thumbnail = data.items[0].snippet.thumbnails.default.url;
        this.setState({youtubeList: [...oldList, {youtubeId, youtubeTitle, thumbnail}], isChangeControl: false});
      } else {
        alert('URL을 다시 확인 해주세요.');
      }

    });
  };

  handleGetYoutubeTitle = (videoId) => {
    const ytApiKey = 'AIzaSyDd1z2RviP-HbS17ofMO-3V1s6bCJn6DNc';
    const apiURL = 'https://www.googleapis.com/youtube/v3/videos?part=snippet&id=' + videoId + '&key=' + ytApiKey;

    return new Promise((resolve, reject) => {
      $.get(apiURL, (data) => {
        console.log('유투브 데이터', data);
        resolve(data);
      });
    });
  }

  handleSyncYoutube = (currentTime) => {
    const oldState = this.state.remote;
    this.setState({remote: {...oldState, isChangeControl: true, controlDetail: { currentTime } }});
  };

  handleGetYoutubeId = (url) => {
    const regex = /^.*(?:(?:youtu\.be\/|v\/|vi\/|u\/\w\/|embed\/)|(?:(?:watch)?\?v(?:i)?=|\&v(?:i)?=))([^#\&\?]*).*/;
    return url.match(regex)[1];
  };

  handleInputChange = (e) => {
    console.log('인풋 체인지', e.target.value);
    this.setState({inputValue: e.target.value});
  };

  handleChangeRemote = (controlDetail) => {
    const oldState = this.state.remote;
    this.setState({remote: {...oldState, isChangeControl: true, controlDetail}}, () => {console.log('상태변경', this.state);});
  };

  handleReturnControlPlayer = () => {
    const { handleChangeRemote, handleSyncYoutube } = this;
    const { control } = this.state;
    return (
      <YoutubeControlPlayer
        videoId={control.playId}
        data={control}
        onChangeRemote={handleChangeRemote}
        onSync={handleSyncYoutube}
      />
    )
  };

  handleReturnRemotePlayer = () => {
    const { remote } = this.state;
    return (
      <YoutubeRemotePlayer
        videoId={remote.playId}
        data={remote}
      />
    )
  };

  render() {
    const { control, remote, youtubeList, inputValue } = this.state;
    const {
      handleUploadYoutube, handlePlayYoutube, handleShareYoutube, handleReturnControlPlayer,
      handleReturnRemotePlayer, handleInputChange
    } = this;
    console.log('render', inputValue);
    return (
      <div id="youtube-control" className="youtube-control">
        <article className="wrap-insert">
          <label>유투브 주소: </label>
          <input
            type="text"
            placeholder=""
            value={inputValue}
            onChange={(e) => {handleInputChange(e);}}
            ref={ref => {this.youtubeId = ref;}}
          />
          <button type="button" className="primary" onClick={() => {handleUploadYoutube();}}>추가</button>
        </article>
        <ul className="wrap-list scroll">
          {
            youtubeList && youtubeList.map((youtubeInfo, index) => {
              const { youtubeId, youtubeTitle, thumbnail } = youtubeInfo;
              return (
                <li key={index}>
                  <div className="thumbnail">
                    <img width="130px" src={thumbnail} />
                  </div>
                  <div className="title">{ youtubeTitle }</div>
                  <div className="buttons">
                    <button type="button" className="button transparent fitted small" onClick={() => {handlePlayYoutube(youtubeId)}}>재생하기</button>
                    <button type="button" className="button transparent fitted small" onClick={() => {handleShareYoutube(youtubeId)}}>공유하기</button>
                  </div>
                </li>
              )
            })
          }
        </ul>

        <div className="wrap-player">
          <div className="wrap-control-player">
            <h4>Control Player</h4>
            <div className="player control">
              {
                control.isBindPlayer && handleReturnControlPlayer()
              }

            </div>
          </div>
          <div className="wrap-remote-player">
            <h4>Remote Player</h4>
            <div className="player remote">
              {
                remote.isBindPlayer && handleReturnRemotePlayer()
              }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default YoutubeControl;
