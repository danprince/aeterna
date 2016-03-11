var Vector = require('../vector');

module.exports = function range(start, end, step) {
  if(arguments.length == 0) {
    throw new Error('Range expects at least one argument');
  }

  var i, range, length;

  if(arguments.length == 1) {
    length = start;
    range = Vector(new Array(length));
    for(i = 0; i < length; i++) {
      range[i] = i;
    }
    return range;
  }

  if(arguments.length == 2) {
    length = end - start;
    range = Vector(new Array(length));
    for(i = 0; i < length; i++) {
      range[i] = start + i;
    }
    return range;
  }

  range = Vector([]);
  for(i = start; i < end; i += step) {
    range.push(i);
  }
  return range;
};

