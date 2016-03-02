var Map = require('./');

module.exports = function merge() {
  var merges = [].filter.call(arguments, function(m) {
    if(typeof m !== 'object') {
      throw new TypeError('Can only merge objects');
    }
    return m !== null;
  });

  // prevent no-op
  if(merges.length === 0) {
    return this;
  }

  var merged = Object.assign.apply(Object, [{}, this].concat(merges));

  return Map(merged);
};


