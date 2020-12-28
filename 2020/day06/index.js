const { loadData } = require('../../lib.js');

const data = loadData('data.txt').reduce(
  (acc, line) => {
    if (line.trim().length > 0) {
      acc[acc.length - 1].push(line);
    } else {
      acc.push([]);
    }
    return acc;
  },
  [[]]
);

const chrCount = (val) =>
  val.reduce((acc, v) => {
    const chrs = v.split('');
    chrs.forEach((chr) => {
      if (!(chr in acc)) {
        acc[chr] = 1;
      } else {
        acc[chr] += 1;
      }
    });
    return acc;
  }, {});

const partOne = (data) =>
  data
    .map((v) => (v.length === 1 ? v[0].length : Object.keys(chrCount(v)).length))
    .reduce((acc, v) => acc + v, 0);

const partTwo = (data) =>
  data
    .map((v) => {
      if (v.length === 1) {
        return v[0].length;
      }
      return Object.values(chrCount(v)).filter((v2) => v2 === v.length).length;
    })
    .reduce((acc, v) => acc + v, 0);

// console.clear();
console.table({ partOne: partOne(data), partTwo: partTwo(data) });
//  process.exit(2)
