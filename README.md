# log4jkjs
Log for javascript.

[![NPM](https://nodei.co/npm/log4jkjs.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/log4jkjs/)

## installation
```bash
npm install log4jkjs
```

## usage
> JavaScript
```javascript
var Logger = require("log4jkjs");
var logger = new Logger("test");

// logger.config(); // default: 'ERROR', 'black', 'console'
logger.config('log', 'red', 'console');
logger.log('hello log', 'log2', 'log3');
logger.info('hello log');
logger.error('hello log');
logger.warn('hello log');
logger.debug('hello log');
```

> TypeScript
```typescript
import Logger = require('log4jkjs');
let logger = new Logger("test");

// logger.config(); // default: 'ERROR', 'black', 'console'
logger.config('log', 'red', 'console');
logger.log('hello log', 'log2', 'log3');
logger.info('hello log');
logger.error('hello log');
logger.warn('hello log');
logger.debug('hello log');
```
> Output
```bash
2018-10-29 11:40:04.804 LOG test => hello log log2 log3
2018-10-29 11:40:04.806 INFO test => hello log
2018-10-29 11:40:04.806 ERROR test => hello log
2018-10-29 11:40:04.807 WARN test => hello log
2018-10-29 11:40:04.807 DEBUG test => hello log
```