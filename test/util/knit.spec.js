const test = require('tape');
const _ = require('../..');

const inc = x => x + 1;
const idn = x => x;
const dec = x => x - 1;

test('knit', (t) => {
  t.plan(2);

  t.deepEquals(
    _.Vector([2, 2, 2]),
    _.knit([inc, idn, dec])([1, 2, 3]),
    'should correctly knit functions'
  );

  t.deepEquals(
    _.Vector([1]),
    _.knit([inc])([0, 1, 2, 3]),
    'should ignore extra arguments'
  );
});

