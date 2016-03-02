const test = require('tape');
const Aeterna = require('../..');
const Map = Aeterna.Map;

test('dissoc', (t) => {
  t.plan(4);

  t.deepEqual(
    Map({}),
    Map({ a: 1 }).dissoc('a'),
    'should dissoc key'
  );

  var m = Map({ a: 3 });
  t.equal(
    m,
    m.dissoc('b'),
    'a no-op should return same reference'
  );

  t.throws(
    () => Map().dissoc(null),
    TypeError,
    'should throw for non-string key'
  );

  t.throws(
    () => Map().dissoc(),
    Error,
   'should throw for bad arity'
  );
});
