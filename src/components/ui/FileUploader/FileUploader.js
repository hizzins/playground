import React, { Component, Fragment } from 'react';
import MaterialIcon from 'material-icons-react';
import PropTypes from 'prop-types';
import './FileUploader.scss';

class FileUploader extends Component {
  constructor(props) {
    super(props);

    this.state = { files: new Map() };
    this.fileKey = 0;
    this.maxFileSize = 1048576 * 10;
    this.formData = new FormData();
  }

  handleStartRead = (e) => {
    console.log('change');
    const { handleGetFile } = this;
    const files = e.target.files;
    if (files) {
      for (let i = 0; i < files.length; i++) {
        const reader = new FileReader();
        console.log('+++files', files[i], this.fileKey);
        handleGetFile(files[i], reader);
      }
    }
  }

  handleGetFile = (readFile, reader) => {
    const { maxFileSize, handleUpdateProgress, handleError, handleLoaded } = this;
    console.log('+++handleGetFile', readFile, reader);

    if (readFile.size > maxFileSize) {
      alert('최대 30MB까지 업로드 가능합니다.');
      this.fileUploader.value = '';
      return false;
    }

    reader.uploadedFile = readFile;
    // reader.readAsDataURL(readFile);
    reader.readAsArrayBuffer(readFile);
    // Handle progress, success, and errors
    reader.onprogress = handleUpdateProgress;
    reader.onload = handleLoaded;
    reader.onerror = handleError;
  }

  handleUpdateProgress = (e) => {
    console.log('+++handleUpdateProgress', e);
    if (e.lengthComputable) {
      // evt.loaded and evt.total are ProgressEvent properties
      const isCompelete = (e.loaded === e.total);
      if (isCompelete) {
        console.log('완료');
      }
    }
  }

  handleLoaded = (e) => {
    // Obtain the read file data
    const fileReader = e.target;
    const fileData = fileReader.result;
    const { files } = this.state;
    const uploadedFile = fileReader.uploadedFile;

    const willAddState = new Map().set(this.fileKey, uploadedFile);
    const newState = [...files, ...willAddState];

    var fileArr = (new Uint8Array(fileData)).subarray(0, 4);
    var header = '';

    for (var i = 0; i < fileArr.length; i++) {
      header += fileArr[i].toString(16);
    }

    this.setState({ files: new Map(newState)}, () => { console.log('상태변경', this.state);});
    this.fileKey++;

    this.fileUploader.value = '';
  }

  handleError = (e) => {
    if (e.target.error.name == 'NotReadableError') {
      // The file could not be read
    }
  }

  handleDelete = (e, key) => {
    console.log('handleDelete', e, key);
    // state copy
    const filesMap = new Map(this.state.files);
    filesMap.delete(key);
    this.setState({files: filesMap});
  }

  render() {
    const { handleStartRead, handleDelete } = this;
    const { files } = this.state;
    const { text } = this.props;
    const placeholder = text;
    console.log('+++FileUpload', this.state, this.props);
    return (
      <div id="wrap-fileupload">
        <div className="wrap-viewer">
          <div className="file-viewer-area" >
            <div>
              <MaterialIcon icon="folder_open" /> <br />
              {placeholder}
            </div>
          </div>
          <input
            className="file-drop-area"
            type="file"
            name="files"
            multiple
            onChange={(e)=> {console.log('onchange++');handleStartRead(e)}}
            ref={ref => {this.fileUploader = ref;}}
          />
        </div>
        {
          [...files].map(([key, value]) => {
            console.log('files map', value, value.name);
            return (
              <div className="wrap-file" key={key}>
                <div className="file-name" title={value.name}>
                  {value.name}
                </div>
                <div className="file-size">{value.size} Bytes</div>
                <div className="close" onClick={(e) => { handleDelete(e, key); }}>
                  <MaterialIcon icon="cancel" />
                </div>
              </div>
            )
          })
        }
      </div>
    );
  }
}


FileUploader.propTypes = {
  text: PropTypes.string
};

FileUploader.defaultProps = {
  text: '문서 파일을 추가해 주세요.'
};

export default FileUploader;
