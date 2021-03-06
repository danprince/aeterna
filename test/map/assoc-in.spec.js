const test = require('tape');
const _ = require('../..');

test('assocIn', (t) => {
  t.plan(8);

  t.throws(
    () => _.Map({}).assocIn(),
    Error,
    'should throw for too few arguments'
  );

  t.throws(
    () => _.Map({}).assocIn({}, 3),
    TypeError,
    'should throw for non-array keys'
  );

  t.throws(
    () => _.Map({}).assocIn([], 3),
    Error,
    'should throw for empty keys array'
  );

  const m = _.Map({
    a: {
      b: 3,
      c: {
        d: 4
      }
    }
  });

  t.deepEquals(
    _.Map({
      a: {
        b: 5,
        c: {
          d: 4
        }
      }
    }),
    m.assocIn(['a', 'b'], 5),
    'should assoc nested keys'
  );

  t.equals(
    m.a.c,
    m.assocIn(['a', 'b'], 5).a.c,
    'should share structure'
  );

  t.deepEquals(
    _.Map({ a: { b: 3, c: 4 } }),
    _.Map({ a: { b: 3 } }).assocIn(['a', 'c'], 4),
    'should create key if necessary'
  );

  t.deepEquals(
    _.Map({ a: { b: 4 } }),
    _.Map({ a: { b: 3 } }).assocIn(['a', 'b'], 4),
    'should overwrite key if necessary'
  );

  t.deepEquals(
    _.Map({ a: { b: 3 }, z: { x: 0 } }),
    _.Map({ a: { b: 3 } }).assocIn(['z', 'x'], 0),
    'should create path if necessary'
  );
});

