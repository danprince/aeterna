var Map = require('./');

module.exports = function updateIn(keys, f) {
  if(arguments.length < 2) {
    throw new Error('Expected two arguments');
  }

  if(!(keys instanceof Array)) {
    throw new TypeError('Expected keys to be an array');
  }

  if(typeof f != 'function') {
    throw new TypeError('Expected f to be a function');
  }

  if(keys.length == 0) {
    throw new Error('Can\'t updateIn with zero keys');
  }

  return Map(updateIn$(this, keys, f));
};

function updateIn$(obj, keys, f) {
  if(typeof obj != 'object') {
    throw new Error('Could not update into ' + typeof obj);
  }
  // shallow copy of this object to keep us safe from mutation
  // and all that scary stuff
  var copy = Object.assign({}, obj);
  var key = keys[0];
  var path = keys.slice(1);

  var child;

  if(path.length == 0) {
    // set the value at the last key
    copy[key] = f(copy[key]);
  } else {
    // if the next key is missing, use a fresh object instead
    child = key in copy ? copy[key] : {};
    // go one level deeper down the keys path
    copy[key] = updateIn$(child, path, f);
  }

  return copy;
}

