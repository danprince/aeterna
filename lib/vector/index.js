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
  all: require('./all')
});
