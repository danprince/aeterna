const test = require('tape');
const _ = require('../..');

test('identity', (t) => {
  t.plan(4);

  t.equal(
    null,
    _.identity(null),
    'should work for null'
  );

  t.equal(
    20,
    _.identity(20),
    'should work for values'
  );

  const a = [1, 2, 3];
  t.equal(
    a,
    _.identity(a),
    'should work for references'
  );

  t.throws(
    () => _.identity(),
    Error,
    'should throw for zero arguments'
  );
});
