const { loadData, numSort } = require('../../lib.js');

const data = loadData('data-test.txt')
  .map((v) => Number(v))
  .sort(numSort); // .slice(0, 100);

const partOne = (data) => {
  
};

const partTwo = (data) => {
 
};

// console.clear();
console.log('Part one:', partOne(data));
console.log('Part two:', partTwo(data));

// process.exit(2)