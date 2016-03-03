module.exports = function constantly(n) {
  if(arguments.length == 0) {
    throw new Error('Constantly expects one argument');
  }

  return function constant() {
    return n;
  };
};

