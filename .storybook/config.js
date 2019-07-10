import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs';

// automatically import all files ending in *.stories.js
const req = require.context('../src/components/ui', true, /\.stories\.js$/);

const loadStories = () => {
  req.keys().forEach(filename => req(filename));
}

addDecorator(withKnobs);
addDecorator(withInfo);
addDecorator((story) => <div style={{ margin: '50px 50px 100px 50px' }}>{story()}</div>);

configure(loadStories, module);
