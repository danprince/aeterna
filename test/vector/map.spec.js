const test = require('tape');
const _ = require('../..');

const inc = x => x + 1;
const add = (x, y) => x + y;
const allTruthy = (p, q, r) => p && q && r;
const total = (a, b, c, d) => a + b + c + d;
const pair = (a, b) => _.Vector([a, b]);

test('map', (t) => {
  t.plan(6);

  t.throws(
    () => _.Vector([]).map(/hello/g),
    TypeError,
    'should throw for non-function arguments'
  );

  t.deepEquals(
    _.Vector([1, 2, 3]),
    _.Vector([0, 1, 2]).map(inc),
    'should correctly map 1 collection'
  );

  t.deepEquals(
    _.Vector([2, 4, 6]),
    _.Vector([1, 2, 3]).map(add, [1, 2, 3]),
    'should correctly map 2 collections'
  );

  t.deepEquals(
    _.Vector([true, false, true]),
    _.Vector([true, true, true])
      .map(allTruthy, [true, true, true],
                      [true, false, true]),
    'should correctly map 3 collections'
  );

  t.deepEquals(
    _.Vector([4, 5, 6]),
    _.Vector([1, 2, 3])
      .map(total, [0, 0, 0],
                  [1, 1, 1],
                  [2, 2, 2]),
    'should correctly map 4 collections'
  );

  t.deepEquals(
    _.Vector([
      _.Vector([-1, 1]),
      _.Vector([0, 0]),
      _.Vector([1, -1])
    ]),
    _.Vector([-1, 0, 1])
      .map(pair, [1, 0, -1]),
    'can be used to zip vectors'
  );

});

