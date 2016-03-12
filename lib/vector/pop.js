var Vector = require('./');

module.exports = function pop() {
  if(this.length == 0) return this;

  return Vector(this.slice(0, -1));
};

