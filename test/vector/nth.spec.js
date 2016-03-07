const test = require('tape');
const _ = require('../..');

test('nth', (t) => {
  t.plan(4);

  t.throws(
    () => _.Vector([14, 31, 43]).nth(null),
    TypeError,
    'should throw for non-numeric indices'
  );

  t.equals(
    'z',
    _.Vector(['x', 'y', 'z']).nth(2),
    'should return the nth element'
  );

  t.equals(
    'z',
    _.Vector([1, 2, 3]).nth(4, 'z'),
    'should return the not found value for out of range positive index'
  );

  t.equals(
    'z',
    _.Vector([1, 2, 3]).nth(-1, 'z'),
    'should return the not found value for out of range negative index'
  );
});

