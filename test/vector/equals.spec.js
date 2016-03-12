const test = require('tape');
const _ = require('../..');

test('equals', (t) => {
  t.plan(8);

  const v = _.Vector([1, 2, 3]);
  t.true(
    v.equals(v),
    'should work for references'
  );

  t.false(
    v.equals(3),
    'should return false for different types'
  );

  t.true(
    _.Vector([1, 2, 3]).equals(_.Vector([1, 2, 3])),
    'should find equality in flat structures'
  );

  t.true(
    _.Vector([
      [1], [[2], 3]
    ]).equals(_.Vector([
      [1], [[2], 3]
    ])),
    'should find equality in nested structures'
  );

  t.false(
    _.Vector([1]).equals(_.Vector([2])),
    'should find inequality in flat structures'
  );

  t.false(
    _.Vector([1]).equals(_.Vector([1, 2])),
    'should find inequality in extra keys'
  );

  t.false(
    _.Vector([
      [1], [[4], 3]
    ]).equals(_.Vector([
      [1], [[2], 3]
    ])),
    'should find inequality in nested structures'
  );

  t.throws(
    () => _.Vector([]).equals(),
    Error,
    'should throw when called with no args'
  );
});

