var _toConsumableArray = require('../internals/_to-consumable-array');

module.exports = function curry(f, _carriedArgs) {
  if(arguments.length == 0) {
    throw new Error('Expected function for partial');
  }

  if(typeof f != 'function') {
    throw new TypeError('Partial expected f to be a function');
  }

  var arity = f.length;
  var carriedArgs = _carriedArgs || [];

  if(arity == 0) {
    return f;
  }

  return function curried() {
    var callArgs = _toConsumableArray(arguments);
    var holdingArgs = carriedArgs.concat(callArgs);

    if(holdingArgs.length >= arity) {
      return f.apply(null, holdingArgs);
    }

    return curry(f, holdingArgs);
  };
};

