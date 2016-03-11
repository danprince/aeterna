const test = require('tape');
const _ = require('../..');

test('interpose', (t) => {
  t.plan(4);

  t.deepEquals(
    _.Vector([1, 0, 2, 0, 3]),
    _.Vector([1, 2, 3]).interpose(0),
    'should interpose the 0 between the other numbers'
  );

  t.deepEquals(
    _.Vector([1]),
    _.Vector([1]).interpose(null),
    'should not affect one item vectors'
  );

  const v = _.Vector([]);
  t.equals(
    v,
    v.interpose(','),
    'should return same reference for zero item vectors'
  );

  const v1 = _.Vector([1]);
  t.equals(
    v1,
    v1.interpose(','),
    'should return same reference for one item vectors'
  );
});

