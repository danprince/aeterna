const test = require('tape');
const _ = require('../..');

test('interleave', (t) => {
  t.plan(3);

  t.throws(
    () => _.Vector().interleave(null),
    TypeError,
    'should throw for non-array argument'
  );

  t.deepEquals(
    _.Vector([1, 2, 3, 4, 5, 6]),
    _.Vector([1, 3, 5]).interleave([2, 4, 6]),
    'should interleave the numbers in order'
  );

  const v = _.Vector([]);
  t.equals(
    v,
    v.interleave([1, 2, 3]),
    'should return same reference for zero item vectors'
  );
});

