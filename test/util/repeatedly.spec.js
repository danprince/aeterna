const test = require('tape');
const _ = require('../..');

test('repeatedly', (t) => {
  t.plan(4);

  t.throws(
    () => _.repeatedly(),
    Error,
    'should throw for too few arguments'
  );

  t.throws(
    () => _.repeatedly({}, function() {}),
    TypeError,
    'should throw for non-numeric argument'
  );

  t.throws(
    () => _.repeatedly(3, null),
    TypeError,
    'should throw for non-function argument'
  );

  const always = (x) => () => x;
  t.deepEquals(
    _.Vector([3, 3, 3]),
    _.repeatedly(3, always(3)),
    'should return result of calling f n times'
  );
});

