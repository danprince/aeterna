const test = require('tape');
const Aeterna = require('../..');
const Map = Aeterna.Map;

test('assoc', (t) => {
  t.plan(6);

  t.deepEqual(
    Map({ a: 1 }),
    Map().assoc('a', 1),
    'assoc into empty map'
  );

  t.deepEqual(
    Map({ a: 2, b: -2 }),
    Map({ a: 2 }).assoc('b', -2),
    'assoc into populated map'
  );

  t.deepEqual(
    Map({ a: 1 }),
    Map({ a: 2 }).assoc('a', 1),
   'assoc over existing property'
  );

  var m = Map({ a: 3 });
  t.equal(
    m,
    m.assoc('a', 3),
    'a no-op should return same reference'
  );

  t.throws(
    () => Map().assoc(null, 1),
    TypeError,
    'should throw for non-string key'
  );

  t.throws(
    () => Map().assoc('a'),
    Error,
   'should throw for bad arity'
  );
});
