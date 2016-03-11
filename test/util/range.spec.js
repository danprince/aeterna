const test = require('tape');
const _ = require('../..');

test('range', (t) => {
  t.plan(4);

  t.throws(
    () => _.range(),
    Error,
    'should throw for no arguments'
  );

  t.deepEquals(
    _.Vector([0, 1, 2]),
    _.range(3),
    'should create a range with only one argument (end)'
  );

  t.deepEquals(
    _.Vector([2, 3, 4, 5]),
    _.range(2, 6),
    'should create a range with two arguments (start, end)'
  );

  t.deepEquals(
    _.Vector([0, 0.5, 1]),
    _.range(0, 2, 0.5),
    'should create a range with two arguments (start, end, step)'
  );
});

