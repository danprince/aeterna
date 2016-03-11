var Vector = require('../vector');

module.exports = function knit(fs) {
  return function knitted(xs) {
    return Vector(fs.map(function(f, i) {
      return f(xs[i]);
    }));
  };
};

