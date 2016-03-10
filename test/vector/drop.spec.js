const test = require('tape');
const _ = require('../..');

test('drop', (t) => {
  t.plan(3);

  t.throws(
    () => _.Vector().drop('a'),
    TypeError,
    'should throw for non-numeric argument'
  );

  t.deepEquals(
    _.Vector([4]),
    _.Vector([1, 2, 3, 4]).drop(3),
    'should drop the correct number of items'
  );

  const v = _.Vector(['z', 'x', 'y']);
  t.equals(
    v,
    v.drop(4),
    'should return original reference when n > length'
  );
});

