const test = require('tape');
const _ = require('../..');

const isEven = x => x % 2 == 0;

test('filter', (t) => {
  t.plan(2);

  t.deepEquals(
    _.Vector([2, 4]),
    _.Vector([1, 2, 3, 4]).filter(isEven),
    'should filter out odd numbers'
  );

  const v = _.Vector([2, 4, 6]);
  t.deepEquals(
    v,
    v.filter(isEven),
    'should return original reference if no items are removed'
  );
});

