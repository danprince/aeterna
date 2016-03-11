const test = require('tape');
const _ = require('../..');

function isFalsy(x) {
  return !x;
}

test('any', (t) => {
  t.plan(3);

  t.throws(
    () => _.Vector([1, 2, 3]).any({}),
    TypeError,
    'should throw for non-function argument'
  );

  t.equals(
    true,
    _.Vector([true, 1, 'a', false]).any(isFalsy),
    'should identify that some elements match the predicate'
  );

  t.equals(
    false,
    _.Vector([true, 1, 'a', 66]).any(isFalsy),
    'should identify that no elements match the predicate'
  );
});

