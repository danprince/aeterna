var Vector = require('./');

module.exports = function concat() {
  var concat = Array.prototype.concat;
  var joined = concat.apply(this, arguments);

  if(joined.length == this.length) {
    return this;
  } else {
    return Vector(joined);
  }
};

