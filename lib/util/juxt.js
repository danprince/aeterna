var Vector = require('../vector');
var _toConsumableArray = require('../internals/_to-consumable-array');

// TODO type check functions

module.exports = function juxt(f, g, h) {
  if(arguments.length == 0) {
    throw new Error('juxt expected at least one argument');
  }

  if(arguments.length == 1) {
    return function juxt1(x) {
      return Vector([f(x)]);
    };
  }

  if(arguments.length == 2) {
    return function juxt2(x) {
      return Vector([f(x), g(x)]);
    };
  }

  if(arguments.length == 3) {
    return function juxt3(x) {
      return Vector([f(x), g(x), h(x)]);
    };
  }

  var fs = _toConsumableArray(arguments);

  return function juxt4(x) {
    return Vector(fs.map(function(f) {
      return f(x);
    }));
  };
};

