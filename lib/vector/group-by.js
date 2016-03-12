var Map = require('../map');

module.exports = function groupBy(f) {
  if(typeof f != 'function') {
    throw new TypeError('groupBy expects a function');
  }

  var grouped = {};

  var i, key;
  for(i = 0; i < this.length; i++) {
    // typecheck this key?
    key = f(this[i]);

    if(key in grouped) {
      grouped[key].push(this[i]);
    } else {
      grouped[key] = [this[i]];
    }
  }

  return Map(grouped);
};

