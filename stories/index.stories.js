import React from 'react';
import { FileUploader, Carousel } from 'components';
import { storiesOf, addDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withKnobs, text, boolean, number, object, color } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import { Button, Welcome } from '@storybook/react/demo';
import 'contents/scss/main/base.scss';
import './stories.scss';

const slides = [
  {"id": "slide1", "imageURL": "contents/image/background-1.jpg", "alt": "100% 웹브라우저 화상회의"},
  {"id": "slide2", "imageURL": "contents/image/background-2.jpg", "alt": "특허받은 회의실 객체를 이용한 ‘LOUNGE’ UX"},
  {"id": "slide3", "imageURL": "contents/image/background-3.jpg", "alt": "서로의 이해도를 높이는 화면 공유"},
  {"id": "slide4", "imageURL": "contents/image/background-4.jpg", "alt": "협업의 필수, 문서 공유"}
];

const wrapperStyle = {
  padding: '50px',
};
const wrapperDecorator = storyFn => <div style={wrapperStyle}>{storyFn()}</div>;

const fileUploaderFn = () => <FileUploader text={text('placeholder', '문서 파일을 추가해주세요.')} />;

addDecorator(wrapperDecorator);

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button(sample)', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ));

storiesOf('FileUploader', module).addDecorator(withKnobs).add('기본 파일 업로더', withInfo({
  text:`
    + 드래그앤 드롭 또는 클릭해서 파일 업로드 가능.
    + 업로드시 리스트생성.
    `
})(fileUploaderFn));

// storiesOf('Carousel', module).addDecorator(withKnobs).add('Carousel', () =>
//   <Carousel slides={object('slides', slides)} />
// );
