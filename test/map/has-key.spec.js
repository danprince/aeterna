const test = require('tape');
const Aeterna = require('../..');
const Map = Aeterna.Map;

test('hasKey', (t) => {
  t.plan(5);

  t.equal(
    Map({}).hasKey('a'),
    false,
    'should not find key on empty map'
  );

  t.equal(
    Map({ a: 1, b: 2 }).hasKey('c'),
    false,
    'should not find missing key'
  );

  t.equal(
    Map({ a: 1 }).hasKey('a'),
    true,
    'should find key'
  );

  t.throws(
    () => Map({ a: 1 }).hasKey(null),
    'should throw for wrong type of argument'
  );

  t.throws(
    () => Map({ a: 1 }).hasKey('a', 'b'),
    'should throw for wrong number of arguments'
  );
});
