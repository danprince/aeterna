const test = require('tape');
const _ = require('../..');

test('flatten', (t) => {
  t.plan(3);

  t.deepEquals(
    _.Vector([1, 2, 3, 4]),
    _.Vector([1, 2, 3, 4]).flatten(),
    'shouldn\'t affect flat vectors'
  );

  t.deepEquals(
    _.Vector([1, 2, 3, 4]),
    _.Vector([1, [2, 3], 4]).flatten(),
    'should flatten nested vectors in order'
  );

  t.deepEquals(
    _.Vector([1, 2, 3, 4]),
    _.Vector([1, [[2], [[3], [4]]]]).flatten(),
    'should flatten deeply nested vectors in order'
  );
});

