import Logger = require('../lib/index');
let logger = new Logger("test");

// logger.config();
logger.config('LOG', 'red', 'console');
logger.log('hello log', 'log2', 'log3');
logger.info('hello log');
logger.debug('hello log');
logger.warn('hello log');
logger.error('hello log');