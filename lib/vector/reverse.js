var Vector = require('./');

module.exports = function reverse() {
  if(this.length == 0 || this.length == 1) return this;

  var reversed = new Array(this.length);
  var end = this.length - 1;
  var i;

  for(i = 0; i < this.length; i++) {
    reversed[i] = this[end - i];
  }

  return Vector(reversed);
};

