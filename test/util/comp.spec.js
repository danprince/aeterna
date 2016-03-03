const test = require('tape');
const _ = require('../..');

const double = (x) => x * 2;
const sq = (x) => x * x;
const inc = (x) => x + 1;
const sum = (x, y, z) => x + y + z;

test('comp', (t) => {
  t.plan(6);

  t.equal(
    double,
    _.comp(double),
    'should return original function when called with one arg'
  );

  t.equal(
    'comp2',
    _.comp(double, sq).name,
    'should return optimized function for two args'
  );

  t.equal(
    16,
    _.comp(sq, double)(2),
    'should compose two functions in correct order'
  );

  t.equal(
    12,
    _.comp(double, sum)(1, 2, 3),
    'should compose two functions that take multiple args'
  );

  t.equal(
    'comp3',
    _.comp(double, sq, inc).name,
    'should return unoptimized function for > 2 args'
  );

  t.equal(
    17,
    _.comp(double, sq, inc)(2),
    'should compose three functions in correct order'
  );
});

