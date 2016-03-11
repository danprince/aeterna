var Vector = require('../vector');

module.exports = function keys() {
  return Vector(Object.keys(this));
};

