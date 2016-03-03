module.exports = function get(keys, notFound) {
  if(!(keys instanceof Array)) {
    throw new TypeError('Expected array, got: ' + typeof keys);
  }

  if(arguments.length < 1) {
    throw new Error('Bad arity');
  }

  if(typeof notFound == 'undefined') {
    notFound = null;
  }

  var m = this;
  var i, k, done;

  for(i = 0; i < keys.length; i++) {
    k = keys[i];

    if(!m.hasOwnProperty(k)) {
      return notFound;
    }

    done = (i == keys.length - 1);

    if(done) {
      return m[k];
    }

    if(typeof m[k] !== 'object') {
      return notFound;
    } else {
      m = m[k];
    }
  }
};


