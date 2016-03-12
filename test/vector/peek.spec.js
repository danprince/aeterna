const test = require('tape');
const _ = require('../..');

test('peek', (t) => {
  t.plan(3);

  t.equals(
    undefined,
    _.Vector([]).peek(),
    'should return undefined for an empty vector'
  );

  t.equals(
    10,
    _.Vector([10]).peek(),
    'should return the only item for 1 item vector'
  );

  t.equals(
    'z',
    _.Vector(['x', 'y', 'z']).peek(),
    'should return the last item in the vector'
  );
});

