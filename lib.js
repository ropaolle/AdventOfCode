const fs = require('fs');
const pathFunc = require('path');

const numSort = (a, b) => a - b;

exports.loadData = (path, filename, options = {}) => {
  const { numeric, sorted } = options;
  let file = fs.readFileSync(pathFunc.join(path, filename), 'utf8').split(/\r?\n/);

  if (numeric && sorted) {
    return file.map((v) => Number(v)).sort(numSort);
  } else if (numeric) {
    return file.map((v) => Number(v));
  }

  return file;
};
