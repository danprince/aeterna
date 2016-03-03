const test = require('tape');
const _ = require('../..');

test('isOdd', (t) => {
  t.plan(4);

  t.true(
    _.isOdd(41),
    'should recognize odd values'
  );

  t.false(
    _.isOdd(32),
    'should recognize non-odd values'
  );

  t.throws(
    () => _.isOdd(),
    'should throw when passed no arguments',
    Error
  );

  t.throws(
    () => _.isOdd('3'),
    'should throw when passed a non-numeric type',
    TypeError
  );
});

