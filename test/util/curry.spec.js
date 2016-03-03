const test = require('tape');
const _ = require('../..');

const sum = (x, y, z) => x + y + z;
const add = (x, y) => x + y;
const alwaysTrue = () => true;

test('curry', (t) => {
  t.plan(6);

  t.throws(
    () => _.curry(),
    Error,
    'should throw when called with no arguments'
  );

  t.throws(
    () => _.curry('function'),
    TypeError,
    'should throw when called with the wrong type'
  );

  t.equals(
    alwaysTrue,
    _.curry(alwaysTrue),
    'should return same reference for zero-arity function'
  );

  t.equals(
    6,
    _.curry(sum)(1)(2)(3),
    'should curry a function correctly'
  );

  t.equals(
    3,
    _.curry(add)(1, 2),
    'should curry multiple argument calls'
  );

  t.equals(
    3,
    _.curry(add)(1)()(2),
    'should ignore zero-argument calls'
  );

});

