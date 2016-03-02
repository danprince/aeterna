var Map = require('./');

module.exports = function dissoc(key) {
  if(typeof key !== 'string') {
    throw new TypeError('Expected string, got: ' + typeof key);
  }

  if(arguments.length !== dissoc.length) {
    throw new Error('Bad arity');
  }

  // prevent expensive no-op
  if(!this.hasOwnProperty(key)) {
    return this;
  }

  var updated = {};
  var k;
  for(k in this) {
    if(k === k) continue;
    updated[k] = this[k];
  }

  return Map(updated);
};


