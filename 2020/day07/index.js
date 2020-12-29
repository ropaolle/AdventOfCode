const { loadData } = require('../../lib.js');

const data = loadData('data.txt').map((v) => v.slice(0, -1));

const bagsThatCanContainOtherBags = (data) =>
  data
    .map((v) => {
      const parts = v.split(' bags contain ');
      return { type: parts[0], data: parts[1] };
    })
    .filter(({ data }) => data !== 'no other bags');

const bagsIndirectly = (bagsThatCanContainOtherBags, canContainGoldBags) =>
  bagsThatCanContainOtherBags
    .filter(({ data }) => canContainGoldBags.some((v) => data.indexOf(v) !== -1))
    .map((v) => v.type);

const partOne = (data) => {
  let canContainGoldBagsDirectly = bagsThatCanContainOtherBags(data)
    .filter(({ data }) => data.indexOf('shiny gold bag') !== -1)
    .map((v) => v.type);

  const set = new Set(canContainGoldBagsDirectly);
  let before = 0;
  do {
    before = set.size;
    canContainGoldBagsDirectly = bagsIndirectly(
      bagsThatCanContainOtherBags(data),
      canContainGoldBagsDirectly
    );
    canContainGoldBagsDirectly.forEach((item) => set.add(item));
  } while (set.size > before);

  return set.size;
};

const getContent = (bagType, data) =>
  bagsThatCanContainOtherBags(data)
    .filter(({ type }) => type === bagType)
    // .map(({ data }) => data.split(', '));
    .reduce((acc, { data }) => {
      return acc.concat(data.split(', '));
    }, [])
    .map((v) => {
      const splitted = v.split(' ');
      return {
        count: splitted[0],
        type: splitted[1] + ' ' + splitted[2],
      };
    });

const partTwo = (data) => {
  let x = getContent('shiny gold', data);
  console.log('x', x);

  const y = x.reduce((acc, v) => {
    console.log('v', v.type);
    const t = getContent(v.type, data);
    console.log('t', t);
    acc = acc.concat(t);
    return acc;
  }, []);

  console.log('y', y);

  // while (x.length > 0) {

  // }

  // shiny gold bags contain 1 dark olive bag, 2 vibrant plum bags.
  // faded blue bags contain 0 other bags.
  // dotted black bags contain 0 other bags.
  // vibrant plum bags contain 11 other bags: 5 faded blue bags and 6 dotted black bags.
  // dark olive bags contain 7 other bags: 3 faded blue bags and 4 dotted black bags.
  // const a1 = bagsThatCanContainOtherBags
  //   .filter(({ type }) => type === 'shiny gold')
  //   .map(({ data }) => data.split(', '));
  // console.log('bagsThatCanContainOtherBags', a1);

  // const x = getContent('shiny gold', data).map(v => {
  //   console.log('v', v);
  //   const splitted = v.split(' ')
  //   return {
  //     count: splitted[0],
  //     type: splitted[1] + ' ' + splitted[2],

  //   }
  // })
  // console.log(x);
  // console.log(getContent('pale green', data));
  // console.log(getContent('faded gold', data));

  /*
  '5 striped white bags',
    '1 mirrored coral bag',
    '3 dark plum bags',    
  //   '5 clear teal bags'  */
  // console.log(getContent('triped white', data));
  // console.log(getContent('mirrored coral', data));
  // console.log(getContent('dark plum', data));
  // console.log(getContent('clear teal',data));

  return 'OLLE';
};

console.clear();
// console.log(partTwo(data))
console.table({ partOne: partOne(data), partTwo: partTwo(data) });
//  process.exit(2)
