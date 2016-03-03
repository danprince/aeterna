module.exports = Map;

function Map(init) {
  var m = Object.create(Map.prototype);

  if(typeof init === 'object') {
    Object.assign(m, init);
  }

  return m;
}

Map.prototype = {
  assoc: require('./assoc'),
  dissoc: require('./dissoc'),
  size: require('./size'),
  hasKey: require('./has-key'),
  empty: require('./empty'),
  merge: require('./merge'),
  get: require('./get'),
  getIn: require('./get-in')
};

