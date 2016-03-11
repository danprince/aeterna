module.exports = function all(pred) {
  if(typeof pred != 'function') {
    throw new TypeError('all expected a function');
  }

  var i;
  for(i = 0; i < this.length; i++) {
    if(!pred(this[i])) return false;
  }

  return true;
};

