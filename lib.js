const fs = require('fs');

exports.numSort = (a, b) => a - b;

exports.loadData = (filename) => fs.readFileSync(filename, 'utf8').split(/\r?\n/);