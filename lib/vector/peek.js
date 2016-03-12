module.exports = function peek() {
  if(this.length == 0) {
    return undefined;
  } else {
    return this[this.length - 1];
  }
};

