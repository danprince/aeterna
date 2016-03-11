const test = require('tape');
const _ = require('../..');

function isOdd(x) { return x % 2 != 0; }
function isNeg(x) { return x < 0; }

test('complement', (t) => {
  t.plan(3);

  t.throws(
    () => _.complement([]),
    TypeError,
    'should throw if passed non-function arugment'
  );

  t.equals(
    true,
    _.complement(isOdd)(4),
    'should return the opposite truth value (true)'
  );

  t.equals(
    false,
    _.complement(isNeg)(-4),
    'should return the opposite truth value (false)'
  );
});
