var Vector = require('./');

module.exports = function distinct() {
  var distinct = [];

  var i;
  for(i = 0; i < this.length; i++) {
    if(distinct.indexOf(this[i]) < 0) {
      distinct.push(this[i]);
    }
  }

  if(distinct.length == this.length) {
    return this;
  } else {
    return Vector(distinct);
  }
};

