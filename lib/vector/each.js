var _toConsumableArray = require('../internals/_to-consumable-array');

module.exports = function each(f) {
  if(typeof f != 'function') {
    throw new TypeError('Each expected a function');
  }

  var args = _toConsumableArray(arguments);
  var colls = [this].concat(args.slice(1));

  // TODO can be optimized for low arity application

  var i;
  for(i = 0; i < this.length; i++) {
    f.apply(null, colls.map(function(coll) {
      return coll[i];
    }));
  }

  // side-effects incoming!
  return undefined;
};
