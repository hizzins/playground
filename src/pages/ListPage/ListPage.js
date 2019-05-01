import React from 'react';
import {Link} from "react-router-dom";
import './ListPage.scss';

const ListPage = () => {
  return (
    <div className="wrap-main">
      <div className="menu">
        <Link to="/carousel">Carousel</Link>
        <Link to="/file-uploader">File Uploader</Link>
        <Link to="/editor">Editor</Link>
        <Link to="/youtube">Youtube</Link>
        <Link to="/toast">Toast</Link>
        <Link to="/WebrtcCameraPage">webRTCCapture</Link>
      </div>
      <div className="footer">
        REF
        <a href="https://material.io/tools/icons/?style=baseline"> - https://material.io/tools/icons/?style=baseline</a>
      </div>
    </div>
  )
};

export default ListPage;
