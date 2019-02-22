import React from 'react';
import { FileUploader } from 'components';
import MaterialIcon, {colorPalette} from 'material-icons-react';
import './FileUploaderPage.scss';

const FileUploaderPage = () => {
  return (
    <div className="page file-uploader-page">
      <FileUploader />
      <h4>Features</h4>
      <ul>
        <li><MaterialIcon icon="check" size={12} /> multiple upload</li>
        <li><MaterialIcon icon="check" size={12} /> 이미지 썸네일 보기</li>
        <li><MaterialIcon icon="check" size={12} /> 이미지 썸네일 삭제</li>
        <li><MaterialIcon icon="check" size={12} /> mime type validation 체크(jpg, png, gif만 가능)</li>
        <li><MaterialIcon icon="check" size={12} /> 파일 사이즈 validation 체크(최대 30MB)</li>
      </ul>
    </div>
  )
};

export default FileUploaderPage;
