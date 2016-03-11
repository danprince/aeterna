var Vector = require('./');

module.exports = function interpose(sep) {
  if(this.length == 0 || this.length == 1) {
    return this;
  }

  var interposed = [];
  var i;

  for(i = 0; i < this.length; i++) {
    interposed.push(this[i], sep);
  }

  // remember to remove trailing separator
  return Vector(interposed.slice(0, -1));
};

