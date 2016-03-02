module.exports = function hasKey(key) {
  if(typeof key !== 'string') {
    throw new TypeError('Expected string');
  }

  if(arguments.length !== hasKey.length) {
    throw new Error('Invalid arity');
  }

  return this.hasOwnProperty(key);
};

