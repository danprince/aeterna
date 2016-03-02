module.exports = Map;

var assoc = require('./assoc');

function Map(init) {
  var m = Object.create(Map.prototype);

  if(typeof init === 'object') {
    Object.assign(m, init);
  }

  return m;
}

Map.prototype = {
  assoc: assoc
};

