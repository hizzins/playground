import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'components/common/Button';
import styles from './UploadDocuments.module.scss';

class UploadDocuments extends Component {
  constructor(props) {
    super(props);

    this.state = props.filesInfo;
    this.maxFileSize = 1048576 * 500;

    // TODO: validation check 최대 10개, 최대 500MB
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

  handleStartRead = (e) => {
    const { handleGetFile } = this;
    const { files } = e.target;

    if (files) {
      for (const file of files) {
        const reader = new FileReader();
        handleGetFile(file, reader);
      }
    }
  };

  handleGetFile = (readFile, reader) => {
    const { handleUpdateProgress, handleError, handleLoaded } = this;
    console.log('+++handleGetFile', readFile, reader);
    readFile.key = new Date().getTime();
    // add unique key
    reader.selectedFile = readFile;
    console.log('+++여기', { ...readFile, key: new Date().getTime() });
    // reader.readAsDataURL(readFile);
    reader.readAsArrayBuffer(readFile);
    // Handle progress, success, and errors
    reader.onprogress = handleUpdateProgress;
    reader.onload = handleLoaded;
    reader.onerror = handleError;
  };

  handleUpdateProgress = (e) => {
    console.log('+++handleUpdateProgress', e);
    if (e.lengthComputable) {
      // evt.loaded and evt.total are ProgressEvent properties
      const isCompelete = e.loaded === e.total;
      if (isCompelete) {
        console.log('완료');
      }
    }
  };

  handleLoaded = (e) => {
    // Obtain the read file data
    const fileReader = e.target;
    const { files, totalSize } = this.state;
    const { onChange } = this.props;
    const { selectedFile } = fileReader;
    const newFiles = [...files, selectedFile];
    const newSize = totalSize + selectedFile.size;
    const newState = { files: newFiles, totalSize: newSize };
    this.setState(newState);
    onChange(newState);
    this.fileUploader.value = '';
  };

  handleError = (e) => {
    if (e.target.error.name === 'NotReadableError') {
      // The file could not be read
    }
  };

  handleDelete = (e, key) => {
    const { files, totalSize } = this.state;
    const { onChange } = this.props;
    const newFiles = [];
    let newSize = 0;

    for (const file of files) {
      if (file.key !== key) {
        newFiles.push(file);
      } else {
        newSize = totalSize - file.size;
      }

      onChange(newFiles);
    }

    this.setState({ files: newFiles, totalSize: newSize });
    this.fileUploader.value = '';
  };

  render() {
    const { handleStartRead, handleDelete } = this;
    const { files, totalSize } = this.state;
    const { name, customClass, customPreview, placeholder } = this.props;
    const currentSize =
      totalSize < 1048576 ? Math.ceil((totalSize * 100) / 1048576) / 100 : Math.floor(totalSize / 1048576);

    return (
      <div id={name && `upload-${name}`} className={`${styles.wrapUpload} ${customClass}`}>
        <div className="box-upload">
          {placeholder}
          <input
            className="file"
            type="file"
            multiple
            name={name}
            onChange={(e) => {
              console.log('onchange++');
              handleStartRead(e);
            }}
            ref={(ref) => {
              this.fileUploader = ref;
            }}
          />
        </div>
        {!!files.length && !customPreview && (
          <div className="wrap-preview">
            <p className="size-progress">{`${currentSize}MB/500MB`}</p>
            {files.map((file) => (
              <div className="preview-item" key={file.key}>
                <span className="file-name">{file.name}</span>
                <Button
                  type="transparent"
                  size="auto"
                  onClick={(e) => {
                    handleDelete(e, file.key);
                  }}
                >
                  <i className="rsicon-close" />
                </Button>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }
}

UploadDocuments.propTypes = {
  name: PropTypes.string,
  placeholder: PropTypes.string,
  customClass: PropTypes.string,
  customPreview: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  filesInfo: PropTypes.shape({ files: PropTypes.array.isRequired, totalSize: PropTypes.number.isRequired }),
};

UploadDocuments.defaultProps = {
  name: '',
  placeholder: '파일을 여기에 드래그 앤 드롭 또는 클릭하여 불러오기',
  customPreview: false,
  customClass: '',
  filesInfo: { files: [], totalSize: 0 },
};

export default UploadDocuments;
