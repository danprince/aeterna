var Vector = require('./');

module.exports = function drop(n) {
  if(typeof n !== 'number') {
    throw new TypeError('drop expected a number');
  }

  if(n > this.length) {
    return this;
  }

  return Vector(this.slice(n));
};

