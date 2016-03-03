module.exports = function isEven(x) {
  if(arguments.length == 0) {
    throw new Error('isEven expects one argument');
  }

  if(typeof x != 'number') {
    throw new TypeError('isEven expects a number');
  }

  // handle infinity and nan

  return x % 2 == 0;
};

