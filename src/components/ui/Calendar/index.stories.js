import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import 'assets/styles/main.scss';

import Calendar from '.';

storiesOf('Calendar', module)
  .addParameters({
    info: {
      text: `
        ## Source
        **<Calendar date={new Date()} onChangeDate={action('onChanged')} />** 
      `,
      inline: true,
      header: false,
      source: false,
    },
  })
  .add('Default', () => <Calendar date={new Date()} onChangeDate={action('onChanged')} />);
