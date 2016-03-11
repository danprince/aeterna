module.exports = function any(pred) {
  if(typeof pred != 'function') {
    throw new TypeError('Any expected a function');
  }

  var i;
  for(i = 0; i < this.length; i++) {
    if(pred(this[i])) return true;
  }

  return false;
};

