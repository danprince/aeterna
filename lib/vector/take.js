var Vector = require('./');

module.exports = function take(n) {
  if(typeof n !== 'number') {
    throw new TypeError('Take expected a number');
  }

  if(n > this.length) {
    return this;
  }

  return Vector(this.slice(0, n));
};

