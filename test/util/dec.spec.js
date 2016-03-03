const test = require('tape');
const _ = require('../..');

test('dec', (t) => {
  t.plan(5);

  t.equal(
    42,
    _.dec(43),
    'should decrement number'
  );

  t.doesNotThrow(
    () => _.dec(Number.NEGATIVE_INFINITY),
    'should decrement infinity silently'
  );

  t.throws(
    () => _.dec(NaN),
    Error,
    'should throw when passed NaN'
  );

  t.throws(
    () => _.dec('3'),
    TypeError,
    'should throw when passed non-number'
  );

  t.throws(
    () => _.dec(),
    Error,
    'should throw when passed no arguments'
  );
});

