const test = require('tape');
const Aeterna = require('../..');
const Map = Aeterna.Map;

test('merge', (t) => {
  t.plan(6);

  t.deepEqual(
    Map({ a: 1, b: 2 }),
    Map({}).merge(Map({ a: 1, b: 2 })),
    'should merge props into an empty map'
  );

  t.deepEqual(
    Map({ a: 1, b: 2 }),
    Map({ a: 0, b: 1 }).merge(Map({ a: 1, b: 2 })),
    'should overwrite existing properties'
  );

  t.deepEqual(
    Map({ a: 1, b: 2 }),
    Map({ a: 1 }).merge({ b: 2 }),
    'should work with js objects'
  );

  t.deepEqual(
    Map({ a: 1, b: 2, c: 3 }),
    Map({ a: 1 }).merge({ b: 2 }, { c: 3 }),
    'should merge multiple maps'
  );

  t.deepEqual(
    Map({ a: 1 }),
    Map({ a: 1 }).merge(null),
    'should ignore null silently'
  );

  t.throws(
    () => Map({}).merge(2),
    'should throw for non-object type'
  );
});

