module.exports = function isOdd(x) {
  if(arguments.length == 0) {
    throw new Error('isOdd expects one argument');
  }

  if(typeof x != 'number') {
    throw new TypeError('isOdd expects a number');
  }

  return x % 2 != 0;
};

