const test = require('tape');
const _ = require('../..');

test('subvec', (t) => {
  t.plan(5);

  const v = _.Vector([1, 2, 3]);
  t.equals(
    v,
    v.subvec(),
    'should return the same reference when called with no args'
  );

  t.deepEquals(
    _.Vector([3, 4]),
    _.Vector([1, 2, 3, 4]).subvec(2),
    'should return all items after start index'
  );

  t.deepEquals(
    _.Vector([2, 3]),
    _.Vector([1, 2, 3, 4]).subvec(1, 3),
    'should return all items between start and end'
  );

  t.deepEquals(
    _.Vector([1, 2, 3]),
    _.Vector([1, 2, 3]).subvec(-3, 3),
    'should ignore items outside of the start of the range'
  );

  t.deepEquals(
    _.Vector([1, 2, 3]),
    _.Vector([1, 2, 3]).subvec(0, 10),
    'should ignore items outside the end of the range'
  );
});

