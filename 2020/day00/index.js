const { loadData, numSort } = require('../../lib.js');

const rawData = loadData('data-test.txt')
  .map((v) => Number(v))
  .sort(numSort); // .slice(0, 100);

const partOne = (data) => {};

const partTwo = (data) => {};

// console.clear();
console.table({ partOne: partOne(rawData), partTwo: partTwo(rawData) });
//  process.exit(2)
