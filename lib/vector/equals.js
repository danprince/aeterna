var deepEqual = require('deep-equal');

module.exports = function equals(that) {
  if(arguments.length == 0) {
    throw new Error('Expected argument');
  }

  if(typeof this != typeof that) {
    return false;
  }

  if(this === that) {
    return true;
  }

  return deepEqual(this, that);
};

