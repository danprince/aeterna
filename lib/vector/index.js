module.exports = Vector;

function Vector(init) {
  if(init && !(init instanceof Array)) {
    throw new Error('Vector constructor takes an array');
  }

  var v = [];

  try {
    Object.setPrototypeOf(v, Vector.prototype);
  } catch(ex) {
    v.__proto__ = Vector.prototype;
  }

  Object.assign(v, init);

  return v;
}

Vector.prototype = Object.create(Array.prototype);

Object.assign(Vector.prototype, {
  conj: require('./conj'),
  subvec: require('./subvec'),
  first: require('./first'),
  rest: require('./rest'),
  nth: require('./nth'),
  each: require('./each'),
  flatten: require('./flatten'),
  mapcat: require('./mapcat'),
  take: require('./take'),
  takeWhile: require('./take-while'),
  drop: require('./drop'),
  dropWhile: require('./drop-while'),
  interpose: require('./interpose'),
  interleave: require('./interleave'),
  any: require('./any'),
  all: require('./all'),
  map: require('./map'),
  reverse: require('./reverse'),
  sort: require('./sort'),
  zipmap: require('./zipmap'),
  concat: require('./concat'),
  filter: require('./filter'),
  remove: require('./remove'),
  peek: require('./peek'),
  pop: require('./pop'),
  distinct: require('./distinct'),
  equals: require('./equals'),
  isEmpty: require('./is-empty'),
  partitionBy: require('./partition-by'),
  partition: require('./partition'),
  groupBy: require('./group-by')
});

