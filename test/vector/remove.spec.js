const test = require('tape');
const _ = require('../..');

const isEven = x => x % 2 == 0;

test('remove', (t) => {
  t.plan(2);

  t.deepEquals(
    _.Vector([1, 3]),
    _.Vector([1, 2, 3, 4]).remove(isEven),
    'should remove even numbers'
  );

  const v = _.Vector([1, 3, 5]);
  t.deepEquals(
    v,
    v.remove(isEven),
    'should return original reference if no items are removed'
  );
});

