const test = require('tape');
const _ = require('../..');

const sum = (x, y, z) => x + y + z;
const add = (x, y) => x + y;

test('partial', (t) => {
  t.plan(9);

  t.throws(
    () => _.partial(),
    Error,
    'should throw when called with no arguments'
  );

  t.throws(
    () => _.partial('function'),
    TypeError,
    'should throw when called with the wrong type'
  );

  t.equal(
    sum,
    _.partial(sum),
    'should return same function when called with one arg'
  );

  t.equal(
    'partial1',
    _.partial(sum, 1).name,
    'should return optimized function for 1 arg'
  );

  t.equal(
    'partial2',
    _.partial(sum, 1, 2).name,
    'should return optimized function for 2 args'
  );

  t.equal(
    'partial3',
    _.partial(sum, 1, 2, 3).name,
    'should return optimized function for 3 args'
  );

  t.equal(
    2,
    _.partial(add, 1)(1),
    'should partially apply one arg'
  );

  t.equal(
    3,
    _.partial(sum, 1, 1)(1),
    'should partially apply two args'
  );

  t.equal(
    9,
    _.partial(sum, 3, 3, 3)(),
    'should partially apply three args'
  );
});

