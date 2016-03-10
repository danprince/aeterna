const test = require('tape');
const _ = require('../..');

function isNeg(x) {
  return x < 0;
}

test('dropWhile', (t) => {
  t.plan(3);

  t.throws(
    () => _.Vector().dropWhile('a'),
    TypeError,
    'should throw for non-function argument'
  );

  t.deepEquals(
    _.Vector([0, 2, 3]),
    _.Vector([-1, -2, -3, 0, 2, 3]).dropWhile(isNeg),
    'should drop all the leading negative numbers'
  );

  const v = _.Vector([1, 2, 3]);
  t.equals(
    v,
    v.dropWhile(isNeg),
    'should return original reference when 0 items are dropped'
  );
});

