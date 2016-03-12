const test = require('tape');
const _ = require('../..');

test('pop', (t) => {
  t.plan(3);

  const v = _.Vector([]);
  t.equals(
    v,
    v.pop(),
    'should return original for empty list'
  );

  t.deepEquals(
    _.Vector([]),
    _.Vector([1]).pop(),
    'should return empty vector when popping 1 item'
  );

  t.deepEquals(
    _.Vector([1, 2]),
    _.Vector([1, 2, 3]).pop(),
    'should remove the last item from the vector'
  );
});

