const test = require('tape');
const _ = require('../..');

test('inc', (t) => {
  t.plan(5);

  t.equal(
    1,
    _.inc(0),
    'should increment number'
  );

  t.doesNotThrow(
    () => _.inc(Number.POSITIVE_INFINITY),
    'should increment infinity silently'
  );

  t.throws(
    () => _.inc(NaN),
    Error,
    'should throw when passed NaN'
  );

  t.throws(
    () => _.inc('3'),
    TypeError,
    'should throw when passed non-number'
  );

  t.throws(
    () => _.inc(),
    Error,
    'should throw when passed no arguments'
  );
});

