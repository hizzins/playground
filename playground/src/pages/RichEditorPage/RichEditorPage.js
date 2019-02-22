import React from 'react';
import { QuillEditor } from 'components';
import MaterialIcon, {colorPalette} from 'material-icons-react';
import './RichEditorPage.scss';

const RichEditorPage = () => {
  return (
    <div className="page rich-editor-page">
      <QuillEditor />
      <h4>Features</h4>
      <ul>
        <li><MaterialIcon icon="check" size={12} /> 기본 텍스트 스타일</li>
        <li><MaterialIcon icon="check" size={12} /> 이미지 삽입</li>
        <li><MaterialIcon icon="check" size={12} /> 이미지 드로그앤 드랍</li>
        <li><MaterialIcon icon="check" size={12} /> 이미지 사이즈 조절</li>
        <li><MaterialIcon icon="check" size={12} /> 동영상 삽입기능(embeded)</li>
      </ul>
      <h4>Reference</h4>
      - <a href="https://www.npmjs.com/package/react-quill">react-quill</a><br />
      - <a href="https://www.npmjs.com/package/quill-image-drop-module">quill-image-drop-module NPM</a><br />
      - <a href="https://github.com/kensnyder/quill-image-drop-module">quill-image-drop-module github</a><br />
      - <a href="https://www.npmjs.com/package/quill-image-resize">quill-image-drop-module NPM</a><br />
      - <a href="https://github.com/kensnyder/quill-image-resize-module">quill-image-resize-module github</a><br />
    </div>
  )
};

export default RichEditorPage;
