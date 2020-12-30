const { loadData } = require('../../lib.js');

const data = loadData(__dirname, 'data-test.txt').join('');

const pattern0 =
  'L.LL.LL.LLLLLLLLL.LLL.L.L..L..LLLL.LL.LLL.LL.LL.LLL.LLLLL.LL..L.L.....LLLLLLLLLLL.LLLLLL.LL.LLLLL.LL';
const pattern1 =
  '#.LL.L#.###LLLLLL.L#L.L.L..L..#LLL.LL.L##.LL.LL.LL#.LLLL#.##..L.L.....#LLLLLLLL##.LLLLLL.L#.#LLLL.##';
const pattern5 =
  '#.#L.L#.###LLL#LL.L#L.#.L..#..#L##.##.L##.#L.LL.LL#.#L#L#.##..L.L.....#L#L##L#L##.LLLLLL.L#.#L#L#.##';

const width = 10;
const adjacent = [-width + 1, -width + 2, -width + 3 - 1, 1, width - 3, width - 2, width - 1];

// TODO: Stor data in array

const nextGeneration = (gen) => {
  let next = '';
  [...gen].forEach((v, i) => {
    //   console.log('i % width', i, i % width);
    if (
      v === 'L' &&
      adjacent.every((v) => gen[i + v] === undefined || gen[i + v] === 'L' || gen[i + v] === '.')
    ) {
      next += '#';
    } else if (v === '#' && adjacent.filter((v) => gen[i + v] === '#').length > 3) {
      next += 'L';
    } else {
      next += v;
    }
  });
  return next;
};

const partOne = () => {
  let next = data;
  console.log(next);
  next = nextGeneration(next);
  console.log(next);
  next = nextGeneration(next);
  console.log(next);
  next = nextGeneration(next);
  console.log(next);
  next = nextGeneration(next);
  console.log(next);
  next = nextGeneration(next);
  console.log(next);
  next = nextGeneration(next);
  console.log(pattern5);

};

const partTwo = () => {};

console.clear();
console.log('Part one:', partOne());
// console.log('Part two:', partTwo());

// Exports
exports.partOne = partOne;
exports.partTwo = partTwo;
