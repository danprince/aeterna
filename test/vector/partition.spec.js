const test = require('tape');
const _ = require('../..');

test('partition', (t) => {
  t.plan(9);

  t.throws(
    () => _.Vector([]).partition(null),
    TypeError,
    'should throw for non-numeric n'
  );

  t.throws(
    () => _.Vector([]).partition(1, '2'),
    TypeError,
    'should throw for non-numeric step'
  );

  t.throws(
    () => _.Vector([]).partition(1, 2, 3),
    TypeError,
    'should throw for non-array pad'
  );

  t.deepEqual(
    _.Vector([[1, 2], [3, 4], [5, 6]]),
    _.Vector([1, 2, 3, 4, 5, 6]).partition(2),
    'should partition a vector into groups of 2'
  );

  t.deepEqual(
    _.Vector([[1, 2, 3, 4], [5, 6]]),
    _.Vector([1, 2, 3, 4, 5, 6]).partition(4),
    'should leave last group partially filled'
  );

  t.deepEqual(
    _.Vector([[1, 2, 3, 4], [4, 5, 6]]),
    _.Vector([1, 2, 3, 4, 5, 6]).partition(4, 3),
    'should accept step < n to return duplicates'
  );

  t.deepEqual(
    _.Vector([[1, 2, 3, 4], [6]]),
    _.Vector([1, 2, 3, 4, 5, 6]).partition(4, 5),
    'should accept step > n to omit items'
  );

  t.deepEqual(
    _.Vector([[1, 2, 3, 4], [5, 6, 7, 8]]),
    _.Vector([1, 2, 3, 4, 5, 6]).partition(4, 4, [7, 8]),
    'should take from pad to complete final partition'
  );

  t.deepEqual(
    _.Vector([[1, 2, 3, 4], [5, 6, 7]]),
    _.Vector([1, 2, 3, 4, 5, 6]).partition(4, 4, [7]),
    'should leave final partition unfilled if pad is not long enough'
  );
});

