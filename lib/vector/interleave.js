var Vector = require('./');

module.exports = function interleave(coll) {
  if(!(coll instanceof Array)) {
    throw new TypeError('Can\'t interleave non-array');
  }

  if(this.length == 0) {
    return this;
  }

  var interleaved = new Array(this.length * 2);

  var i;
  for(i = 0; i < this.length; i++) {
    interleaved[i * 2] = this[i];
    interleaved[(i * 2) + 1] = coll[i];
  }

  return Vector(interleaved);
};

