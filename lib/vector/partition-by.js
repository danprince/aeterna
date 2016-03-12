var Vector = require('./');

module.exports = function partitionBy(f) {
  if(typeof f != 'function') {
    throw new TypeError('Expected function');
  }

  if(this.length == 0) {
    return this;
  }

  var partitions = [];
  var init = this[0];
  var partition = [init];
  var sentinel = f(init);

  var i, ret;
  for(i = 1; i < this.length; i++) {
    ret = f(this[i]);

    if(ret == sentinel) {
      partition.push(this[i]);
    } else {
      partitions.push(partition);
      partition = [this[i]];
      sentinel = ret;
    }
  }

  // add final partition to complete
  partitions.push(partition);

  return Vector(partitions);
};

