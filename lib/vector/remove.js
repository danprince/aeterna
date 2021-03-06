var Vector = require('./');

module.exports = function remove(pred) {
  if(typeof pred != 'function') {
    throw new Error('remove expects a function');
  }

  var filtered = [];

  var i;
  for(i = 0; i < this.length; i++) {
    if(!pred(this[i])) {
      filtered.push(this[i]);
    }
  }

  if(filtered.length == this.length) {
    return this;
  } else {
    return Vector(filtered);
  }
};

