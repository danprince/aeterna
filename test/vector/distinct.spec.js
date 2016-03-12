const test = require('tape');
const _ = require('../..');

test('distinct', (t) => {
  t.plan(2);

  const v = _.Vector([1, 2, 3, 4]);
  t.equals(
    v,
    v.distinct(),
    'should return original reference if already distinct'
  );

  t.deepEqual(
    _.Vector([1, 2, 3, 4]),
    _.Vector([1, 2, 2, 3, 4, 4]).distinct(),
    'should return all non-duplicate values'
  );
});

