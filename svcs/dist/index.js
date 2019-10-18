"use strict";

require("babel-polyfill");

require("dotenv/config");

var _http = _interopRequireDefault(require("http"));

var _app = _interopRequireDefault(require("./app"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// import https from 'https';
// import logger from './logger';
var port = process.env.PORT || 8080;

_http["default"].createServer(_app["default"].callback()).listen(port); // logger.info('http server running on port:', port);


console.log('http server running on port:', port);