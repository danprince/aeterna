var Vector = require('./');

module.exports = function flatMap(f) {
  if(typeof f != 'function') {
    throw new TypeError('flatmap expects a fucntion');
  }

  var flat = [];
  var i;

  for(i = 0; i < this.length; i++) {
    flat = flat.concat(f(this[i]));
  }

  return Vector(flat);
};
