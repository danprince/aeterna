module.exports = function identity(x) {
  if(arguments.length == 0) {
    throw new Error('Identity called with zero arguments');
  }

  return x;
};

