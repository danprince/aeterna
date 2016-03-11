const test = require('tape');
const _ = require('../..');

test('concat', (t) => {
  t.plan(4);

  t.deepEquals(
    _.Vector([1, 2, 3]),
    _.Vector([1]).concat([2, 3]),
    'should concatenate two vectors'
  );

  t.deepEquals(
    _.Vector([1, 2, 3]),
    _.Vector([1]).concat(2, 3),
    'should concatenate individual items'
  );

  t.deepEquals(
    _.Vector([1, 2, 3]),
    _.Vector([1]).concat([2], 3),
    'should concatenate a mix of vectors and items'
  );

  const v = _.Vector([1]);
  t.equals(
    v,
    v.concat([], []),
    'should return original reference when called with zero-length arguments'
  );
});

