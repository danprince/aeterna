var deepEqual = require('deep-equal');

// TODO decide whether this should be variadic
module.exports = function equals(that) {
  if(arguments.length < 1) {
    throw new Error('Bad arity');
  }

  if(typeof this != typeof that) {
    // warn that you've used strange type
    return false;
  }

  if(this === that) {
    // cheap reference equality
    return true;
  }

  return deepEqual(this, that);
};

