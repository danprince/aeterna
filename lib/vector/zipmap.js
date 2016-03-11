var Map = require('../map');

module.exports = function zipmap(vals) {
  var keys = this;
  var map = {};

  var i;
  for(i = 0; i < keys.length; i++) {
    map[keys[i]] = vals[i];
  }

  return Map(map);
};

