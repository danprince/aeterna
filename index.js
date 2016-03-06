var util = require('./lib/util');

var aeterna = {
  Map: require('./lib/map'),
  Vector: require('./lib/vector')
};

module.exports = Object.assign(aeterna, util);

