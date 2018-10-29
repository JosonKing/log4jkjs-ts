'use strict';

const fsJet = require('fs-jetpack');
fsJet.copy('./lib', './publish/log4jkjs/lib', {
  overwrite: true
});
fsJet.copy('./LICENSE', './publish/log4jkjs/LICENSE', {
  overwrite: true
});
fsJet.copy('./package.json', './publish/log4jkjs/package.json', {
  overwrite: true
});
fsJet.copy('./README.md', './publish/log4jkjs/README.md', {
  overwrite: true
});
