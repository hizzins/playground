import React from 'react';
import { QuillEditor } from 'components';
import MaterialIcon, {colorPalette} from 'material-icons-react';
import './RichEditorPage.scss';

const RichEditorPage = () => {
  return (
    <div className="page rich-editor-page">
      <QuillEditor />
      <ul>
        <li><MaterialIcon icon="check" size={12} /> 기본 텍스트 스타일</li>
        <li><MaterialIcon icon="check" size={12} /> 이미지 삽입</li>
        <li><MaterialIcon icon="check" size={12} /> 이미지 드로그앤 드랍</li>
        <li><MaterialIcon icon="check" size={12} /> 이미지 사이즈 조절</li>
        <li><MaterialIcon icon="check" size={12} /> 동영상 삽입기능(embeded)</li>
      </ul>
    </div>
  )
};

export default RichEditorPage;
