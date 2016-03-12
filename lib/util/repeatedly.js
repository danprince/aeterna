var Vector = require('../vector');

module.exports = function repeatedly(n, f) {
  if(arguments.length < 2) {
    throw new Error('Not enough arguments');
  }

  if(typeof n !== 'number') {
    throw new TypeError('Expected n to be a number');
  }

  if(typeof f !== 'function') {
    throw new TypeError('Expected f to be a function');
  }

  var repeated = new Array(n);

  var i;
  for(i = 0; i < n; i++) {
    repeated[i] = f();
  }

  return Vector(repeated);
};

