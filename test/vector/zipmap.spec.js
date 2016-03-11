const test = require('tape');
const _ = require('../..');

test('zipmap', (t) => {
  t.plan(4);

  t.deepEquals(
    _.Map({ a: 1, b: 2, c: 3 }),
    _.Vector(['a', 'b', 'c']).zipmap([1, 2, 3]),
    'should zip together a map of keys/values'
  );

  t.deepEquals(
    _.Map({ a: 1, b: 2, c: 3 }),
    _.Vector(['a', 'b', 'b', 'c']).zipmap([1, 1, 2, 3]),
    'should overwrite duplicated keys'
  );

  t.deepEquals(
    _.Map({ a: 1, b: 2 }),
    _.Vector(['a', 'b']).zipmap([1, 2, 3]),
    'should ignore extra vals'
  );

  t.deepEquals(
    _.Map({ a: undefined, b: undefined, c: undefined }),
    _.Vector(['a', 'b', 'c']).zipmap([]),
    'missing values should be set to undefined'
  );
});

