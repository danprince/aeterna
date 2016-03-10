var Vector = require('./');

module.exports = function mapcat(f) {
  if(typeof f != 'function') {
    throw new TypeError('mapcat expects a fucntion');
  }

  if(this.length == 0) {
    return this;
  }

  // TODO support multiple collection arguments
  // (f & colls) form

  var flat = [];
  var i;

  for(i = 0; i < this.length; i++) {
    flat = flat.concat(f(this[i]));
  }

  return Vector(flat);
};

