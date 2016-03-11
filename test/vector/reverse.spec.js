const test = require('tape');
const _ = require('../..');

test('reverse', (t) => {
  t.plan(3);

  const v = _.Vector([]);
  t.equals(
    v,
    v.reverse(),
    'should return original reference when reversing 0 items'
  );

  const v2 = _.Vector([1]);
  t.equals(
    v2,
    v2.reverse(),
    'should return original reference when reversing 1 item'
  );

  t.deepEquals(
    _.Vector([1, 2, 3]),
    _.Vector([3, 2, 1]).reverse(),
    'should correctly reverse a vector'
  );
});

