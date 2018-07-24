'use strict';

var _jsxFileName = 'client/src/index.js';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _App = require('./page/App');

var _App2 = _interopRequireDefault(_App);

var _registerServiceWorker = require('./registerServiceWorker');

var _registerServiceWorker2 = _interopRequireDefault(_registerServiceWorker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _reactDom.hydrate)(_react2.default.createElement(_App2.default, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}), document.getElementById('root'));
(0, _registerServiceWorker2.default)();