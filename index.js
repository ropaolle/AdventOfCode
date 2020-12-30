const { partOne: Day01PartOne, partTwo: Day01PartTwo } = require('./2020/day01');
const { partOne: Day02PartOne, partTwo: Day02PartTwo } = require('./2020/day02');
const { partOne: Day03PartOne, partTwo: Day03PartTwo } = require('./2020/day03');
const { partOne: Day04PartOne, partTwo: Day04PartTwo } = require('./2020/day04');
const { partOne: Day05PartOne, partTwo: Day05PartTwo } = require('./2020/day05');
const { partOne: Day06PartOne, partTwo: Day06PartTwo } = require('./2020/day06');
const { partOne: Day07PartOne, partTwo: Day07PartTwo } = require('./2020/day07');
const { partOne: Day08PartOne, partTwo: Day08PartTwo } = require('./2020/day08');
const { partOne: Day09PartOne, partTwo: Day09PartTwo } = require('./2020/day09');

const results = [
  { Day: 01, PartOne: Day01PartOne(), PartTwo: Day01PartTwo() },
  { Day: 02, PartOne: Day02PartOne(), PartTwo: Day02PartTwo() },
  { Day: 03, PartOne: Day03PartOne(), PartTwo: Day03PartTwo() },
  { Day: 04, PartOne: Day04PartOne(), PartTwo: Day04PartTwo() },
  { Day: 05, PartOne: Day05PartOne(), PartTwo: Day05PartTwo() },
  { Day: 06, PartOne: Day06PartOne(), PartTwo: Day06PartTwo() },
  { Day: 07, PartOne: Day07PartOne(), PartTwo: Day07PartTwo() },
  { Day: 08, PartOne: Day08PartOne(), PartTwo: Day08PartTwo() },
  { Day: 09, PartOne: Day09PartOne(), PartTwo: Day09PartTwo() },
];

console.clear();
console.table(results);
