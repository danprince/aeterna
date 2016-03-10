var Vector = require('./');

module.exports = function takeWhile(pred) {
  if(typeof pred !== 'function') {
    throw new TypeError('takeWhile expected a function');
  }

  var i = 0;
  while(i < this.length && pred(this[i])) {
    i++;
  }

  var hasTakenAll = (i == this.length);
  if(hasTakenAll) {
    return this;
  } else {
    return Vector(this.slice(0, i));
  }
};

