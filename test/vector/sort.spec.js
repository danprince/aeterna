const test = require('tape');
const _ = require('../..');

test('sort', (t) => {
  t.plan(4);

  t.throws(
    () => _.Vector([]).sort(6),
    TypeError,
    'should throw if provided argument is not a function'
  );

  t.deepEquals(
    _.Vector([1, 2, 3]),
    _.Vector([3, 1, 2]).sort(),
    'should sort without a cmp function'
  );

  t.deepEquals(
    _.Vector([3, 2, 1]),
    _.Vector([3, 1, 2]).sort((a, b) => b - a),
    'should sort with a cmp function'
  );

  const v = _.Vector([1, 2, 3]);
  t.notEquals(
    v,
    v.sort(),
    'should not mutate the underlying reference'
  );
});

