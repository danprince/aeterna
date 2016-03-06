var Vector = require('./');
var _toConsumableArray = require('../internals/_to-consumable-array');

module.exports = function conj(x) {
  if(arguments.length == 0) {
    throw new Error('Conj needs at least one argument');
  }

  if(arguments.length == 1) {
    return Vector(this.concat([x]));
  }

  else {
    return Vector(this.concat(_toConsumableArray(arguments)));
  }
};

