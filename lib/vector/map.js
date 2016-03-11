var Vector = require('./');
var _toConsumableArray = require('../internals/_to-consumable-array');

module.exports = function map(f, c1, c2, c3) {
  if(typeof f !== 'function') {
    throw new TypeError('Map expected a function');
  }

  var mapped = Vector(new Array(this.length));
  var i;

  if(arguments.length == 1) {
    for(i = 0; i < this.length; i++) {
      mapped[i] = f(this[i]);
    }
    return mapped;
  }

  if(arguments.length == 2) {
    for(i = 0; i < this.length; i++) {
      mapped[i] = f(this[i], c1[i]);
    }
    return mapped;
  }

  if(arguments.length == 3) {
    for(i = 0; i < this.length; i++) {
      mapped[i] = f(this[i], c1[i], c2[i]);
    }
    return mapped;
  }

  if(arguments.length == 4) {
    for(i = 0; i < this.length; i++) {
      mapped[i] = f(this[i], c1[i], c2[i], c3[i]);
    }
    return mapped;
  }


  var colls = _toConsumableArray(arguments).slice(1);

  for(i = 0; i < this.length; i++) {
    var xs = colls.map(function(c) {
      return c[i];
    });

    mapped[i] = f.apply(null, [this[i]].concat(xs));
  }

  return mapped;
};

