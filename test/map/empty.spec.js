const test = require('tape');
const Aeterna = require('../..');
const Map = Aeterna.Map;

test('empty', (t) => {
  t.plan(1);

  t.deepEqual(
    Map({}).empty(),
    Map({}),
    'should return an empty map'
  );
});

