var Map = require('./');

module.exports = function assocIn(keys, val) {
  if(arguments.length < 2) {
    throw new Error('Expected two arguments');
  }

  if(!(keys instanceof Array)) {
    throw new TypeError('Expected keys to be an array');
  }

  if(keys.length == 0) {
    throw new Error('Can\'t assocIn with zero keys');
  }

  return Map(assocIn$(this, keys, val));
};

function assocIn$(obj, keys, val) {
  if(typeof obj != 'object') {
    throw new Error('Could not assoc into ' + typeof obj);
  }
  // shallow copy of this object to keep us safe from mutation
  // and all that scary stuff
  var copy = Object.assign({}, obj);
  var key = keys[0];
  var path = keys.slice(1);

  // if the next key is missing, use a fresh object instead
  var child = key in copy ? copy[key] : {};

  if(path.length == 0) {
    // set the value at the last key
    copy[key] = val;
  } else {
    // go one level deeper down the keys path
    copy[key] = assocIn$(child, path, val);
  }

  return copy;
}

