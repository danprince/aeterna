var Vector = require('./');

module.exports = function sort(cmp) {
  var vals = Object.assign([], this);

  if(arguments.length > 0 && typeof cmp != 'function') {
    throw new TypeError('Expected cmp to be a function');
  }

  if(arguments.length == 0) {
    return Vector(vals.sort());
  } else {
    return Vector(vals.sort(cmp));
  }
};

