var Vector = require('./');

module.exports = function dropWhile(pred) {
  if(typeof pred !== 'function') {
    throw new TypeError('dropWhile expected a function');
  }

  var i = 0;
  while(i < this.length && pred(this[i])) {
    i++;
  }

  var hasDroppedNone = (i == 0);
  if(hasDroppedNone) {
    return this;
  } else {
    return Vector(this.slice(i));
  }
};

