// require('babel-polyfill')

// css 的转码 hook
require('css-modules-require-hook')({
    generateScopedName: '[name]__[local]___[hash:base64:5]'
  });

require('asset-require-hook')({
    extensions: ['png', 'jpg', 'svg'],
    name: '[name].[ext]',
    publicPath: '/static/media/',
});
const app = require('./app');

app.listen(3000);

// log
console.log('server start at: http://127.0.0.1:3000/')
