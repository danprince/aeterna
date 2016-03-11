var Vector = require('../vector');

module.exports = function vals() {
  var keys = Object.keys(this);

  // PERF probably faster to keep outer reference
  var vals = keys.map(function(k) {
    return this[k];
  }, this);

  return Vector(vals);
};

