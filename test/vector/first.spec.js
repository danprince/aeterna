const test = require('tape');
const _ = require('../..');

test('first', (t) => {
  t.plan(3);

  t.equals(
    'x',
    _.Vector(['x', 'y', 'z']).first(),
    'should return the first item from the vector'
  );

  t.doesNotThrow(
    () => _.Vector([]).first(),
    'does not throw if vector is empty'
  );

  t.equals(
    'undefined',
    typeof _.Vector([]).first(),
    'returns undefined when vector is empty'
  );
});

