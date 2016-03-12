const test = require('tape');
const _ = require('../..');

const first = coll => coll[0];

test('partitionBy', (t) => {
  t.plan(3);

  t.throws(
    () => _.Vector([]).partitionBy([]),
    TypeError,
    'should throw for non function argument'
  );

  const v = _.Vector([]);
  t.equals(
    v,
    v.partitionBy(first),
    'should return original reference for empty vector'
  );

  t.deepEquals(
    _.Vector([['bill', 'bert'], ['edward', 'ellis']]),
    _.Vector(['bill', 'bert', 'edward', 'ellis']).partitionBy(first),
    'should correctly partition a list'
  );
});

