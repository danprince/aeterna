const test = require('tape');
const _toConsumableArray = require('../../lib/internals/_to-consumable-array');

test('_toConsumableArray', (t) => {
  t.plan(1);

  (function() {
    t.deepEqual(
      [1, 2, 3],
      _toConsumableArray(arguments),
      'should convert arguments to array'
    );
  })(1, 2, 3);
});

