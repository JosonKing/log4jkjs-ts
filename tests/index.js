"use strict";
exports.__esModule = true;
var Logger = require("../lib/index");
var logger = new Logger("test");
// logger.config();
logger.config('LOG', 'red', 'console');
logger.log('hello log', 'log2', 'log3');
logger.info('hello log');
logger.debug('hello log');
logger.warn('hello log');
logger.error('hello log');
