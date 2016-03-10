const test = require('tape');
const _ = require('../..');

function isNeg(x) {
  return x < 0;
}

test('takeWhile', (t) => {
  t.plan(3);

  t.throws(
    () => _.Vector().takeWhile('a'),
    TypeError,
    'should throw for non-function argument'
  );

  t.deepEquals(
    _.Vector([-5, -0.2, -1]),
    _.Vector([-5, -0.2, -1, 3, -1, -6]).takeWhile(isNeg),
    'should take only the leading negative numbers'
  );

  const v = _.Vector([-1, -1, -1]);
  t.equals(
    v,
    v.takeWhile(isNeg),
    'should return the same reference if all elements are taken'
  );
});

