const test = require('tape');
const _ = require('../..');

test('repeat', (t) => {
  t.plan(3);

  t.throws(
    () => _.repeat(),
    Error,
    'should throw for < 2 args'
  );

  t.throws(
    () => _.repeat(null, 3),
    TypeError,
    'should throw type error for non-number'
  );

  t.deepEquals(
    _.Vector([3, 3, 3]),
    _.repeat(3, 0),
    'should return a vector of 3 zeros'
  );
});

