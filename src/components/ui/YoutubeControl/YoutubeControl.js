import React, { Component } from 'react';
import { YoutubePlayer } from 'components';
import getYoutubeTitle from 'get-youtube-title';
import './YoutubeControl.scss';

class YoutubeControl extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: 'https://www.youtube.com/watch?v=oeWN_92Lmvo',
      control: {isBindPlayer: false, playId: ''},
      remote: {isBindPlayer: false, playId: '', isChangeControl: false, controlDetail: {} },
      youtubeList: []
    };

    this.currentTime = 0;
  }

  handlePlayYoutube = (youtubeId) => {
    this.setState({control: {isBindPlayer: true, playId: youtubeId}});
  }

  handleShareYoutube = (youtubeId) => {
    const remoteState = {remote: {isBindPlayer: true, playId: youtubeId, controlDetail: false}};
    const controlState = {control: {isBindPlayer: true, playId: youtubeId}};
    this.setState({...remoteState, ...controlState}, () => {console.log('+++++상태변경', this.state);});
  }

  handleUploadYoutube = () => {
    const { handleGetYoutubeId } = this;
    const youtubeAddress = this.youtubeId.value;
    const youtubeId = handleGetYoutubeId(youtubeAddress);
    const oldList = this.state.youtubeList;

    // 유투브 타이틀 get
    getYoutubeTitle(
      youtubeId,
      (err, youtubeTitle) => {
        this.setState({youtubeList: [...oldList, {youtubeId, youtubeTitle}], controlDetail: false});
      });
  }

  handleMountPlayer = (data, target) => {
    const { handleSyncYoutube, handleChangeRemote } = this;

    console.log('handleMountPlayer', data, target);
    return (
      <YoutubePlayer
        videoId={data.playId}
        target={target}
        data={data}
        onChangeRemote={handleChangeRemote}
        onSync={handleSyncYoutube}
      />
    );
  }

  handleSyncYoutube = (currentTime) => {
    const oldState = this.state.remote;
    this.setState({remote: {...oldState, isChangeControl: true, controlDetail: { currentTime } }});
  }

  handleGetYoutubeId = (url) => {
    const regex = /^.*(?:(?:youtu\.be\/|v\/|vi\/|u\/\w\/|embed\/)|(?:(?:watch)?\?v(?:i)?=|\&v(?:i)?=))([^#\&\?]*).*/;
    return url.match(regex)[1];
  }

  handleInputChange = (e) => {
    this.setState({inputValue: e.value});
  }

  handleChangeRemote = (controlDetail) => {
    const oldState = this.state.remote;
    this.setState({remote: {...oldState, isChangeControl: true, controlDetail}});
  }


  render() {
    const { control, remote, youtubeList, inputValue, handleInputChange } = this.state;
    const { handleMountPlayer, handleUploadYoutube, handlePlayYoutube, handleShareYoutube } = this;
    console.log('value', inputValue);
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
          <button type="button" className="submit" onClick={() => {handleUploadYoutube();}}>추가</button>
        </article>
        <ul className="wrap-list scroll">
          {
            youtubeList && youtubeList.map((youtubeInfo, index) => {
              const { youtubeId, youtubeTitle } = youtubeInfo;
              return (
                <li key={index}>
                  <div className="thumbnail">
                    <img width="130px" src={`https://img.youtube.com/vi/${youtubeId}/0.jpg`} />
                  </div>
                  <div className="title">{ youtubeTitle }</div>
                  <div className="buttons">
                    <button type="button" className="transparent small" onClick={() => {handlePlayYoutube(youtubeId)}}>재생하기</button>
                    <button type="button" className="transparent small" onClick={() => {handleShareYoutube(youtubeId)}}>공유하기</button>
                  </div>
                </li>
              )
            })
          }
        </ul>

        <div className="wrap-player">
          <h4>Control Player</h4>
          <div className="player control">
            {
              control.isBindPlayer && handleMountPlayer(control, 'control')
            }
          </div>
          <h4>Remote Player</h4>
          <div className="player remote">
            {
              remote.isBindPlayer && handleMountPlayer(remote, 'remote')
            }
          </div>
        </div>
      </div>
    );
  }
}

export default YoutubeControl;
