const test = require('tape');
const _ = require('../..');

test('isEmpty', (t) => {
  t.plan(2);

  t.true(
    _.Vector([]).isEmpty(),
    'should identify empty vectors'
  );

  t.false(
    _.Vector([1]).isEmpty(),
    'should identity non-empty vectors'
  );
});

