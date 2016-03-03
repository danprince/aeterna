const test = require('tape');
const _ = require('../..');

test('isEven', (t) => {
  t.plan(4);

  t.true(
    _.isEven(4),
    'should recognize even values'
  );

  t.false(
    _.isEven(3),
    'should recognize non-even values'
  );

  t.throws(
    () => _.isEven(),
    'should throw when passed no arguments',
    Error
  );

  t.throws(
    () => _.isEven('3'),
    'should throw when passed a non-numeric type',
    TypeError
  );
});

