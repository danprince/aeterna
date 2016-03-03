const test = require('tape');
const Aeterna = require('../..');
const Map = Aeterna.Map;

test('get', (t) => {
  t.plan(4);

  t.equal(
    5,
    Map({ z: 5 }).get('z'),
    'should get property from map'
  );

  t.equal(
    null,
    Map({ z: 5 }).get('x'),
    'should return null for missing property'
  );

  t.equal(
    -1,
    Map({ y: 3 }).get('x', -1),
    'should use default value if key not found'
  );

  t.throws(
    () => Map({ }).get(),
    'should throw for no-arguments'
  );
});

