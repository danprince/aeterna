const test = require('tape');
const _ = require('../..');

test('take', (t) => {
  t.plan(3);

  t.throws(
    () => _.Vector().take('a'),
    TypeError,
    'should throw for non-numeric argument'
  );

  t.deepEquals(
    _.Vector([1, 2, 3]),
    _.Vector([1, 2, 3, 4]).take(3),
    'should take the correct number of items'
  );

  const v = _.Vector(['z', 'x', 'y']);
  t.equals(
    v,
    v.take(4),
    'should return original reference when n > length'
  );

});
