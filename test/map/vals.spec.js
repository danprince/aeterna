const test = require('tape');
const _ = require('../..');

test('vals', (t) => {
  t.plan(2);
  
  t.deepEqual(
    _.Vector([1, 2, 3]),
    _.Map({ a: 1, b: 2, c: 3 }).vals(),
    'should return the map\'s keys'
  );

  const m = _.Map({ a: 1 });
  Object.defineProperty(m, 'b', {
    value: 2,
    enumerable: false
  });

  t.deepEqual(
    _.Vector([1]),
    m.vals(),
    'should not return values for non-enumerable properties'
  );
});

