import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { UploadDocuments, UploadImages } from '.';

storiesOf('Upload', module)
  .addParameters({
    info: {
      text: `
        customPreview 아닌 경우 privew 영역을 그리지 않음(직접작성).
        customPreview 인 경우 filesInfo값 필수.
        ## Source
        **<UploadDocuments onChange={(files) => {// TODO: send to server}}/>**   
        **<UploadImages placeholder="이미지 업로드" onChange={action('onChanged')} />** 
      `,
      inline: true,
      header: false,
      source: false,
      propTables: [UploadDocuments, UploadImages],
    },
  })
  .add('UploadDocuments', () => <UploadDocuments onChange={action('onChanged')} />)
  .add('UploadImages', () => (
    <div>
      <UploadImages customClass="upload" placeholder="이미지 업로드" showSize={true} onChange={action('onChanged')} />
      <br />
      <UploadImages
        customClass="upload"
        placeholder="이미지 업로드"
        multiple
        showSize={true}
        onChange={action('onChanged')}
      />
    </div>
  ));
