import React from 'react';
import { FileUploader, Carousel } from 'components';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import 'contents/scss/main/base.scss';
import moment from 'moment';

import { Button, Welcome } from '@storybook/react/demo';

const onHideTimer = () => {console.log('onHide');};

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ));

storiesOf('FileUploader', module).add('FileUploader', () => <FileUploader />);
storiesOf('Carousel', module).add('Carousel', () =>
  <Carousel />
);
