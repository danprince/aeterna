const test = require('tape');
const Aeterna = require('../..');
const Map = Aeterna.Map;

test('assocIn', (t) => {
  t.plan(7);

  const m = Map({ a: 1 });
  t.notEqual(
    m,
    m.assocIn(['b'], 2),
    'should not mutate the map'
  );

  const b = Map({ b: 2 });
  t.equal(
    b,
    Map({ a: 0, b: b }).assocIn(['a'], 2).b,
    'should share structure'
  );

  t.deepEqual(
    Map({ a: 1, b: 2 }),
    Map({ a: 1 }).assocIn(['b'], 2),
    'should assoc in flat map'
  );

  t.deepEqual(
    Map({ a: Map({ b: Map({ c: 3 }) }) }),
    Map({ a: Map({ }) }).assocIn(['a', 'b', 'c'], 3),
    'should assoc in nested map'
  );

  t.deepEqual(
    Map({ a: Map({ b: Map({ c: 3 }) }) }),
    Map({}).assocIn(['a', 'b', 'c'], 3),
    'should create path if necessary'
  );

  t.throws(
    () => Map({ }).assocIn(null),
    TypeError,
    'should throw for invalid path type'
  );

  t.throws(
    () => Map({ }).assocIn(1, 2, 3),
    Error,
    'should throw for invalid arity'
  );
});
