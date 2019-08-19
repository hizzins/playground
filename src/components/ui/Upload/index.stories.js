import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { UploadDocuments, UploadImages, UploadDocumentsWithYoutube } from '.';

class SampleDocuments extends Component {
  constructor(props) {
    super(props);
    this.state = { filesInfo: { files: [], totalSize: 0 } };
  }

  onChange = (data) => {
    const { files, totalSize } = data;

    this.setState({ filesInfo: { files, totalSize } });
  };

  render() {
    const { onChange } = this;
    const { filesInfo } = this.state;
    return (
      <div>
        <UploadDocuments filesInfo={filesInfo} onChange={onChange} />
      </div>
    );
  }
}

class SampleImage extends Component {
  constructor(props) {
    super(props);
    this.state = { filesInfo: { files: [], totalSize: 0 } };
  }

  onChange = (data) => {
    const { files, totalSize } = data;

    this.setState({ filesInfo: { files, totalSize } });
  };

  render() {
    const { onChange } = this;
    const { filesInfo } = this.state;
    return (
      <div>
        <UploadImages
          customClass="upload"
          placeholder="이미지 업로드"
          showSize
          onChange={onChange}
          filesInfo={filesInfo}
        />
      </div>
    );
  }
}

class SampleImages extends Component {
  constructor(props) {
    super(props);
    this.state = { filesInfo: { files: [], totalSize: 0 } };
  }

  onChange = (data) => {
    const { files, totalSize } = data;
    console.log('onChange', data, files, totalSize);

    this.setState({ filesInfo: { files, totalSize } });
  };

  render() {
    const { onChange } = this;
    const { filesInfo } = this.state;
    return (
      <div>
        <UploadImages
          customClass="upload"
          placeholder="이미지 업로드"
          multiple
          showSize
          onChange={onChange}
          filesInfo={filesInfo}
        />
      </div>
    );
  }
}

storiesOf('Upload', module)
  .addParameters({
    info: {
      text: `
        **customPreview 인 경우 privew 영역을 그리지 않음(직접작성).** 
        ## Source
        **<UploadDocuments onChange={(files) => { set state }} />**   
        **<UploadImages placeholder="이미지 업로드" onChange={action('onChanged')} />** 
      `,
      inline: true,
      header: false,
      source: false,
      propTables: [UploadDocuments, UploadImages],
    },
  })
  .add('UploadDocuments', () => <SampleDocuments />)
  .add('UploadImages', () => (
    <div>
      <SampleImage />
      <SampleImages />
    </div>
  ));
