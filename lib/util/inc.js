module.exports = function inc(x) {
  if(arguments.length == 0) {
    throw new Error('inc expects one argument');
  }

  if(typeof x != 'number') {
    throw new TypeError('inc expects a number');
  }

  if(isNaN(x)) {
    throw new Error('can\'t inc NaN');
  }

  return x += 1;
};

