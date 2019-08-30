import React from 'react';
import { ImageUploader, FileUploader } from 'components';
import MaterialIcon, {colorPalette} from 'material-icons-react';
import './StatAnimationPage.scss';

const StatAnimationPage = () => {
  return (
    <div className="page file-uploader-page">
      <div className="detact-signal">
        <div className="bar" />
        <div className="bar" />
        <div className="bar" />
        <div className="bar" />
        <div className="bar" />
      </div>
      <h4>Features</h4>
      <ul>
        <li><MaterialIcon icon="check" size={12} />UI animation</li>
      </ul>

      <div className="wrap-volume">
        <MaterialIcon icon="check" size={12} />
        <div className="icon"></div>
      </div>
    </div>
  )
};

export default StatAnimationPage;
