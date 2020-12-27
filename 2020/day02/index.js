const { loadData } = require('../../lib.js');

const data = loadData('data.txt').map((line) => {
  const val = line.split(' ');
  const [start, stop] = val[0].split('-');
  return { start, stop, chr: val[1].slice(0, -1), data: val[2] };
});

const partOne = (data) =>
  data.filter(({ start, stop, chr, data }) => {
    const count = data.split(chr).length - 1;
    return count >= start && count <= stop;
  }).length;

const partTwo = (data) =>
  data.filter(({ start, stop, chr, data }) => {
    const pos1 = data[start - 1] === chr;
    const pos2 = data[stop - 1] === chr;
    return pos1 ? !pos2 : pos2;
  }).length;

// console.clear();
console.log('Part one:', partOne(data));
console.log('Part two:', partTwo(data));

process.exit(2)
