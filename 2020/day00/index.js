const { loadData, numSort } = require('../../lib.js');

const data = loadData(__dirname, 'data-test.txt', { numeric: false, sorted: false });

const partOne = () => {};

const partTwo = () => {};

// console.clear();
// console.log('Part one:', partOne());
// console.log('Part two:', partTwo());

// Exports
exports.partOne = partOne;
exports.partTwo = partTwo;
