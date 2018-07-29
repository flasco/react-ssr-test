// require('babel-polyfill')

// css 的转码 hook
require('css-modules-require-hook')({
    extensions: ['.scss', '.css'],
    preprocessCss: (data, filename) =>
        require('node-sass').renderSync({
            data,
            file: filename
        }).css,
    camelCase: true,
    generateScopedName: '[name]__[local]__[hash:base64:8]'
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
