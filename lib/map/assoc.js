var Map = require('./');

module.exports = function assoc(key, val) {
  if(typeof key !== 'string') {
    throw new TypeError('Expected string, got: ' + typeof key);
  }

  if(arguments.length !== assoc.length) {
    throw new Error('Bad arity');
  }

  // prevent expensive no-op
  if(this[key] === val) {
    return this;
  }

  var update = {};
  update[key] = val;
  var updated = Object.assign({}, this, update);

  return Map(updated);
};


