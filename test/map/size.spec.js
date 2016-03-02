const test = require('tape');
const Aeterna = require('../..');
const Map = Aeterna.Map;

test('size', (t) => {
  t.plan(2);

  t.equal(
    Map({}).size(),
    0,
    'should count empty map correctly'
  );

  t.equal(
    Map({ a: 1, b: 2, c: 3 }).size(),
    3,
    'should count populated map correctly'
  );
});
