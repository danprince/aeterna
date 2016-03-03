const test = require('tape');
const _ = require('../..');

test('constantly', (t) => {
  t.plan(4);

  const f = _.constantly(10);

  t.equal(
    'function',
    typeof f,
    'should return a function'
  );

  t.equals(
    10,
    f(),
    'should return the input value'
  );

  t.deepEqual(
    [10, 10, 10],
    [f(), f(), f()],
    'should always return same value'
  );

  t.throws(
    () => _.constantly(),
    'should throw when called with no args'
  );
});

