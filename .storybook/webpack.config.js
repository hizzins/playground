const path = require('path');
const webpack = require('webpack');
const { srcPath } = require('../config/path');

// Export a function. Accept the base config as the only param.
module.exports = async ({ config, mode }) => {
  // `mode` has a value of 'DEVELOPMENT' or 'PRODUCTION'
  // You can change the configuration based on that.
  // 'PRODUCTION' is used when building the static version of storybook.

  // Make whatever fine-grained changes you need
  console.log(config.module.rules);
  config.module.rules.push({
    test: /\.scss$/,
    use: ['style-loader', 'css-loader', 'sass-loader'],
    include: path.resolve(__dirname, '../'),
  });

  config.resolve = {
    alias: {
      components: srcPath + '/components',
      contents: srcPath + '/contents',
      pages: srcPath + '/pages'
    }
  };

  config.plugins.push(
    new webpack.ProvidePlugin({
      $: 'jquery',
      'window.Quill': 'quill'
    })
  );

  // Return the altered config
  return config;
};
