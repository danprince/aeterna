const test = require('tape');
const _ = require('../..');

function dupe(x) {
  return [x, x];
}

test('mapcat', (t) => {
  t.plan(3);

  t.throws(
    () => _.Vector([14, 31, 43]).mapcat(null),
    TypeError,
    'should throw for non-function arguments'
  );

  const v = _.Vector([]);
  t.deepEquals(
    v,
    v.mapcat(dupe),
    'should return same reference for empty vectors'
  );

  t.deepEquals(
    _.Vector([1, 1, 2, 2, 3, 3]),
    _.Vector([1, 2, 3]).mapcat(dupe),
    'should concatenate the results'
  );
});

