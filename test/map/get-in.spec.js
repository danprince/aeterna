const test = require('tape');
const Aeterna = require('../..');
const Map = Aeterna.Map;

test('getIn', (t) => {
  t.plan(6);

  t.equal(
    5,
    Map({ z: 5 }).getIn(['z']),
    'should get property from flat map'
  );

  t.equal(
    3,
    Map({ x: Map({ y: Map({ z: 3 }) }) }).getIn(['x', 'y', 'z']),
    'should get property from nested map'
  );

  t.equal(
    null,
    Map({ z: 5 }).getIn(['x']),
    'should return null for missing property'
  );

  t.equal(
    -1,
    Map({ y: 3 }).getIn(['x'], -1),
    'should use default value if key not found'
  );

  t.throws(
    () => Map({ }).getIn(),
    'should throw for no-arguments'
  );

  t.throws(
    () => Map({ }).getIn(null),
    'should throw if keys is not an array'
  );
});

