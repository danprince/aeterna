const test = require('tape');
const _ = require('../..');

test('conj', (t) => {
  t.plan(4);

  t.throws(
    () => _.Vector([1, 2, 3]).conj(),
    'should throw for missing argument',
    Error
  );

  t.deepEquals(
    _.Vector([1, 2, 3, 4]),
    _.Vector([1, 2, 3]).conj(4),
    'should add item to the end of the vector'
  );

  t.deepEquals(
    _.Vector([1, 2, 3, 4, 5]),
    _.Vector([1, 2, 3]).conj(4, 5),
    'should work for multiple values'
  );

  t.deepEquals(
    _.Vector([1, 2, 3]),
    _.Vector().conj(1, 2, 3),
    'should add items to empty vector'
  );
});

