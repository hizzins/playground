import React, { Component } from 'react';
import ReactQuill, { Quill } from 'react-quill'; // ES6
import { ImageDrop } from 'quill-image-drop-module';
import ImageResize from 'quill-image-resize-module';
import Focus from 'quill-focus';
import 'react-quill/dist/quill.snow.css';
import './QuillEditor.scss'

Quill.register('modules/imageDrop', ImageDrop);
Quill.register('modules/imageResize', ImageResize);
Quill.register('modules/focus', Focus);

class QuillEditor extends React.Component {
  constructor (props) {
    super(props)
    this.state = { editorHtml: '' };
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (html) {
    this.setState({ editorHtml: html });
  }

  render () {
    return (
      <div id="rich-editor">
        <ReactQuill
          theme="snow"
          onChange={this.handleChange}
          value={this.state.editorHtml}
          modules={QuillEditor.modules}
          formats={QuillEditor.formats}
          placeholder={this.props.placeholder}
         />
       </div>
     )
  }
}

/*
 * Quill modules to attach to editor
 * See https://quilljs.com/docs/modules/ for complete options
 */
QuillEditor.modules = {
  toolbar: [
    [{ 'header': '1'}, {'header': '2'}, { 'font': [] }],
    [{size: []}],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [{ 'color': [] }, { 'background': [] }],
    [{'list': 'ordered'}, {'list': 'bullet'},
     {'indent': '-1'}, {'indent': '+1'}],
    ['link', 'image', 'video'],
    ['clean']
  ],
  clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: false,
  },
  imageDrop: true,
  imageResize: {
    displaySize: true,
  },
  focus: {
      focusClass: 'focused-blot' // Defaults to .focused-blot.
  }
};
/*
 * Quill editor formats
 * See https://quilljs.com/docs/formats/
 */
QuillEditor.formats = [
  'header', 'font', 'size',
  'bold', 'italic', 'underline', 'strike', 'blockquote',
  'color', 'background',
  'list', 'bullet', 'indent',
  'link', 'image', 'video'
];

export default QuillEditor;
