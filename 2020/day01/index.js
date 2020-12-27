const { loadData, numSort } = require('../../lib.js');

const data = loadData('data.txt')
  .map((v) => Number(v))
  .sort(numSort); // .slice(0, 100);

const partOne = (data) => {
  for (let p1 = 0; p1 < data.length - 1; p1++) {
    for (let p2 = p1 + 1; p2 < data.length; p2++) {
      const sum = data[p1] + data[p2];
      if (sum > 2020) {
        break;
      }
      if (sum === 2020) {
        return data[p1] * data[p2];
      }
    }
  }
};

const partTwo = (data) => {
  for (let p1 = 0; p1 < data.length - 2; p1++) {
    for (let p2 = p1 + 1; p2 < data.length - 1; p2++) {
      for (let p3 = p2 + 1; p3 < data.length; p3++) {
        const sum = data[p1] + data[p2] + data[p3];
        if (sum > 2020) {
          break;
        }
        if (sum === 2020) {
          return data[p1] * data[p2] * data[p3];
        }
      }
    }
  }
};

console.clear();
console.log('Part one:', partOne(data));
console.log('Part two:', partTwo(data));

// process.exit(2)
