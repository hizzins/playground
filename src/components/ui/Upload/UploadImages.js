import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'components/common/Button';
import Spinner from 'components/common/Spinner';
import styles from './UploadImages.module.scss';

class UploadImages extends Component {
  constructor(props) {
    super(props);
    this.state = props.filesInfo;
    this.maxFileSize = 1048576 * props.maxSize;
    this.totalSize = 0;
  }

  componentWillUpdate(nextProps) {
    const { customPreview, filesInfo } = nextProps;
    const { files } = this.state;
    const isDelete = filesInfo.files.length && filesInfo.files.length < files.length;

    if (customPreview) {
      this.setState = { filesInfo };

      if (isDelete) {
        this.fileUploader.value = '';
      }
    }

    return true;
  }

  componentWillUnmount() {
    const { revokeObjectURL } = this;
    const { files } = this.state;

    for (const file of files) {
      revokeObjectURL(file.url);
    }
  }

  startRead = (e) => {
    console.log('change');
    const { getFile } = this;
    const { files } = e.target;

    if (files) {
      for (let i = 0; i < files.length; i += 1) {
        const reader = new FileReader();

        getFile(files[i], reader);
      }
    }
  };

  getFile = (readFile, reader) => {
    const { maxFileSize, updateProgress, onError, onLoaded } = this;
    const { maxSize } = this.props;
    const { totalSize } = this.state;

    if (totalSize + readFile.size > maxFileSize) {
      alert(`최대 ${maxSize}MB까지 업로드 가능합니다.`);
      this.fileUploader.value = '';
      return false;
    }

    reader.uploadedFile = readFile;
    reader.size = readFile.size;
    reader.readAsArrayBuffer(readFile);
    reader.onprogress = updateProgress;
    reader.onload = onLoaded;
    reader.onerror = onError;

    return true;
  };

  updateProgress = (e) => {
    console.log('+++handleUpdateProgress', e);
    if (e.lengthComputable) {
      // evt.loaded and evt.total are ProgressEvent properties
      const isCompelete = e.loaded === e.total;
      if (isCompelete) {
        console.log('완료');
      }
    }
  };

  onLoaded = (e) => {
    // Obtain the read file data
    const fileReader = e.target;
    const fileData = fileReader.result;
    const { getMimeType, makeHeader } = this;
    const { files, totalSize } = this.state;
    const { onChange, multiple, customPreview } = this.props;
    const fileSize = fileReader.size;
    const newTotalSize = multiple ? totalSize + fileSize : fileSize;

    const arrayBufferView = new Uint8Array(fileData);
    const blob = new Blob([arrayBufferView], { type: 'image/jpeg' });
    const urlCreator = window.URL || window.webkitURL;
    const imageUrl = urlCreator.createObjectURL(blob);
    const newFile = { key: new Date().getTime(), url: imageUrl, size: fileSize };
    const newFiles = multiple ? [...files, newFile] : [newFile];
    const newState = { files: newFiles, totalSize: newTotalSize };
    const fileArr = new Uint8Array(fileData).subarray(0, 4);
    const header = makeHeader(fileArr);
    const mimeType = getMimeType(header);
    console.log('여기***', newState);
    if (mimeType !== 'image/png' && mimeType !== 'image/gif' && mimeType !== 'image/jpeg') {
      alert('이미지파일만 업로드 됩니다.(jpg, png, gif)');
    } else {
      onChange(newState);
      if (!customPreview) this.setState(newState);
    }
    this.fileUploader.value = '';
  };

  onError = (e) => {
    console.log('onError');
    if (e.target.error.name === 'NotReadableError') {
      // The file could not be read
    }
  };

  onDelete = (e, key) => {
    console.log('onDelete', e, key);
    const { revokeObjectURL } = this;
    const { files, totalSize } = this.state;
    const newFiles = [];
    let newTotalSize = 0;

    for (const file of files) {
      if (file.key !== key) {
        newFiles.push(file);
      } else {
        newTotalSize = totalSize - file.size;
        // 메모리 해제
        revokeObjectURL(key);
      }
    }
    this.fileUploader.value = '';
    this.setState({ files: newFiles, totalSize: newTotalSize });
  };

  makeHeader = (fileArr) => {
    let header = '';

    for (let i = 0; i < fileArr.length; i += 1) {
      header += fileArr[i].toString(16);
    }

    return header;
  };

  getMimeType = (headerString) => {
    let type = 'unknown';
    switch (headerString) {
      case '89504e47':
        type = 'image/png';
        break;
      case '47494638':
        type = 'image/gif';
        break;
      case 'ffd8ffe0':
      case 'ffd8ffe1':
      case 'ffd8ffe2':
        type = 'image/jpeg';
        break;
      default:
        type = 'unknown';
        break;
    }
    return type;
  };

  revokeObjectURL = (imageUrl) => {
    const urlCreator = window.URL || window.webkitURL;

    urlCreator.revokeObjectURL(imageUrl);
  };

  render() {
    const { startRead, maxFileSize, onDelete } = this;
    const { customClass, placeholder, customPreview, multiple, showSize } = this.props;
    const { files, totalSize } = this.state;
    const fileSize =
      totalSize < 1048576 ? Math.ceil((totalSize * 100) / 1048576) / 100 : Math.floor(totalSize / 1048576);

    return (
      <div className={`${styles.wrapImageUpload} upload-image`}>
        {showSize && <div className={styles.sizeProgress}>{`${fileSize} / ${maxFileSize / 1048576} MB`}</div>}

        <div className={`${styles.uploadImage} ${customClass} wrap-upload-input`}>
          <input
            multiple={multiple}
            className="upload-input"
            type="file"
            onChange={startRead}
            ref={(ref) => {
              this.fileUploader = ref;
            }}
          />
          {placeholder}
        </div>
        {!customPreview && (
          <div className="preview">
            <ul>
              {files.map((item) => {
                return (
                  <li className="thumbnail" key={item.key}>
                    <Spinner animation="grow" variant="cancle" />
                    <img src={item.url} alt="" />
                    <Button
                      type="transparent"
                      onClick={(e) => {
                        onDelete(e, item.key);
                      }}
                    >
                      <span className="rsicon-close" />
                    </Button>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    );
  }
}

UploadImages.propTypes = {
  filesInfo: PropTypes.shape({ files: PropTypes.array.isRequired, totalSize: PropTypes.number.isRequired }),
  customClass: PropTypes.string,
  placeholder: PropTypes.string,
  customPreview: PropTypes.bool,
  multiple: PropTypes.bool,
  maxSize: PropTypes.number,
  showSize: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
};

UploadImages.defaultProps = {
  filesInfo: { files: [], totalSize: 0 },
  customClass: '',
  showSize: false,
  placeholder: '',
  multiple: false,
  customPreview: false,
  maxSize: 30,
};

export default UploadImages;
