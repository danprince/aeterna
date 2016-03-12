module.exports = function partition(n, step, pad) {
  var partitioned = [];
  var i, last, padding, short;

  if(typeof n != 'number') {
    throw new TypeError('Partition expected n to be a number');
  }

  if(arguments.length == 1) {
    for(i = 0; i < this.length; i += n) {
      partitioned.push(this.slice(i, i + n));
    }

    return partitioned;
  }

  if(typeof step != 'number') {
    throw new TypeError('Partition expected step to be a number');
  }

  if(arguments.length == 2) {
    for(i = 0; i < this.length; i += step) {
      partitioned.push(this.slice(i, i + n));
    }

    return partitioned;
  }

  if(!(pad instanceof Array)) {
    throw new TypeError('Partition expected pad to be an array');
  }

  if(arguments.length == 3) {
    for(i = 0; i < this.length; i += step) {
      partitioned.push(this.slice(i, i + n));
    }

    last = partitioned[partitioned.length - 1];
    if(last.length !== n) {
      short = n - last.length;
      padding = pad.slice(0, short);
      last.push.apply(last, padding);
    }

    return partitioned;
  }
};

