const test = require('tape');
const _ = require('../..');

test('each', (t) => {
  t.plan(3);

  t.throws(
    () => _.Vector([]).each(null),
    TypeError,
    'should throw when passed non function argument'
  );

  var sideEffects = [];
  _.Vector([1, 2, 3]).each(x => sideEffects.push(x));
  t.deepEquals(
    [1, 2, 3],
    sideEffects,
    'should produce side effect for each element in vector'
  );

  t.equals(
    'undefined',
    typeof _.Vector([1, 2, 3]).each(x => x),
    'should always return undefined'
  );
});
