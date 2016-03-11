module.exports = function complement(f) {
  if(typeof f != 'function') {
    throw new TypeError('complement expects a function');
  }

  return function complemented() {
    return !(f.apply(null, arguments));
  };
};

