var Vector = require('./');

module.exports = function subvec(start, end) {
  if(arguments.length == 0) {
    return this;
  }

  else if(arguments.length == 1) {
    return Vector(this.slice(start));
  }

  else {
    return Vector(this.slice(start, end));
  }
};

