var Vector = require('../vector');

module.exports = function repeat(n, x) {
  if(arguments.length < 2) {
    throw new Error('Not enough arguments');
  }

  if(typeof n !== 'number') {
    throw new TypeError('Expected n to be a number');
  }

  var repeated = new Array(n);

  var i;
  for(i = 0; i < n; i++) {
    repeated[i] = x;
  }

  return Vector(repeated);
};

