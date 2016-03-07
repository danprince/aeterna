module.exports = function nth(index, notFound) {
  if(typeof index !== 'number') {
    throw new TypeError('nth expects first arg to be a number');
  }

  if(index > this.length || index < 0) {
    return notFound;
  }

  return this[index];
};

