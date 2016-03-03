module.exports = function get(key, notFound) {
  if(typeof key !== 'string') {
    throw new TypeError('Expected string, got: ' + typeof key);
  }

  if(arguments.length < 1) {
    throw new Error('Bad arity');
  }

  if(this.hasOwnProperty(key)) {
    return this[key];
  } else {
    if(typeof notFound === 'undefined') {
      return null;
    } else {
      return notFound;
    }
  }
};


