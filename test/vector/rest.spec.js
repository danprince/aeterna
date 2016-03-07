const test = require('tape');
const _ = require('../..');

test('first', (t) => {
  t.plan(3);

  t.deepEquals(
    _.Vector(['y', 'z']),
    _.Vector(['x', 'y', 'z']).rest(),
    'should return all elements after the first'
  );

  t.deepEquals(
    _.Vector([]),
    _.Vector(['x']).rest(),
    'should return an empty array for length 1 vector'
  );

  t.deepEquals(
    _.Vector([]),
    _.Vector([]).rest(),
    'should return an empty array for length 0 vector'
  );
});

