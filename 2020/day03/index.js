const { loadData } = require('../../lib.js');

const data = loadData('data.txt');

const countTrees = (right, down, mapWith, data) => {
  let count = 0;
  let x = 0;
  for (let y = down; y < data.length; y += down) {
    x += right;
    if (data[y][x % mapWith] === '#') {
      count += 1;
    }
  }

  return count;
};

const partOne = (data) => countTrees(3, 1, 31, data);

const partTwo = (data) =>
  countTrees(1, 1, 31, data) *
  countTrees(3, 1, 31, data) *
  countTrees(5, 1, 31, data) *
  countTrees(7, 1, 31, data) *
  countTrees(1, 2, 31, data);

// console.clear();
console.table({ partOne: partOne(data), partTwo: partTwo(data) });
//  process.exit(2)
