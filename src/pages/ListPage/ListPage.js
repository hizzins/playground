import React from 'react';
import {Link} from "react-router-dom";
import './ListPage.scss';

const ListPage = () => {
  return (
    <div className="wrap-main">
      <div className="menu">
        <section>
          <h3>UI</h3>
          <Link to="/slide">Slide Images</Link>
          <Link to="/carousel">Carousel</Link>
          <Link to="/file-uploader">File Uploader</Link>
          <Link to="/editor">Editor</Link>
          <Link to="/toast">Toast</Link>
        </section>
        <section>
          <h3>Practice</h3>
          <Link to="/youtube">Youtube</Link>
          <Link to="/WebrtcCameraPage">webRTCCapture</Link>
          <Link to="/counter">CounterPage</Link>
          <Link to="/todo">TodoPage</Link>
        </section>
      </div>
      <div className="footer">
        REF
        <a href="https://material.io/tools/icons/?style=baseline"> - https://material.io/tools/icons/?style=baseline</a>
      </div>
    </div>
  )
};

export default ListPage;
