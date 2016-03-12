const test = require('tape');
const _ = require('../..');

const inc = (x) => x + 1;

test('updateIn', (t) => {
  t.plan(9);

  t.throws(
    () => _.Map({}).updateIn(),
    Error,
    'should throw for too few arguments'
  );

  t.throws(
    () => _.Map({}).updateIn({}, 3),
    TypeError,
    'should throw for non-array keys'
  );

  t.throws(
    () => _.Map({}).updateIn(['a'], 3),
    TypeError,
    'should throw for non-function f'
  );

  t.throws(
    () => _.Map({}).updateIn([], 3),
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
        b: 4,
        c: {
          d: 4
        }
      }
    }),
    m.updateIn(['a', 'b'], inc),
    'should update nested keys'
  );

  t.equals(
    m.a.c,
    m.updateIn(['a', 'b'], inc).a.c,
    'should share structure'
  );

  t.deepEquals(
    _.Map({ a: { b: 3, c: 4 } }),
    _.Map({ a: { b: 3 } }).updateIn(['a', 'c'], () => 4),
    'should create key if necessary'
  );

  t.deepEquals(
    _.Map({ a: { b: 4 } }),
    _.Map({ a: { b: 3 } }).updateIn(['a', 'b'], () => 4),
    'should overwrite key if necessary'
  );

  t.deepEquals(
    _.Map({ a: { b: 3 }, z: { x: 0 } }),
    _.Map({ a: { b: 3 } }).updateIn(['z', 'x'], () => 0),
    'should create path if necessary'
  );
});

