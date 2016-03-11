const test = require('tape');
const _ = require('../..');

test('keys', (t) => {
  t.plan(2);
  
  t.deepEqual(
    _.Vector(['a', 'b', 'c']),
    _.Map({ a: 1, b: 2, c: 3 }).keys(),
    'should return the map\'s keys'
  );

  const m = _.Map({ a: 1 });
  Object.defineProperty(m, 'b', {
    value: 2,
    enumerable: false
  });

  t.deepEqual(
    _.Vector(['a']),
    m.keys(),
    'should not return non-enumerable properties'
  );
});

