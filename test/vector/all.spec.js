const test = require('tape');
const _ = require('../..');

function isFalsy(x) {
  return !x;
}

test('all', (t) => {
  t.plan(3);

  t.throws(
    () => _.Vector([1, 2, 3]).all({}),
    TypeError,
    'should throw for non-function argument'
  );

  t.equals(
    true,
    _.Vector([false, null, '', undefined, 0]).all(isFalsy),
    'should identify that all elements match the predicate'
  );

  t.equals(
    false,
    _.Vector([true, 1, 'a', false]).all(isFalsy),
    'should identify that not all elements match the predicate'
  );
});

