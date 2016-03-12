const test = require('tape');
const _ = require('../..');

const len = (x) => x.length;
const first = (x) => x[0];

test('groupBy', (t) => {
  t.plan(3);

  t.throws(
    () => _.Vector([]).groupBy(),
    TypeError,
    'should throw when passed non-function'
  );

  t.deepEquals(
    _.Map({
      3: ['sam', 'pip'],
      5: ['frodo', 'merry']
    }),
    _.Vector(['sam', 'pip', 'frodo', 'merry']).groupBy(len),
    'should group items by length (numeric keys)'
  );

  t.deepEquals(
    _.Map({
      f: ['frodo'],
      s: ['sam', 'strider'],
      g: ['gimli', 'gandalf']
    }),
    _.Vector([
      'frodo', 'gimli', 'sam', 'strider', 'gandalf'
    ]).groupBy(first),
    'should group items by first letter (string keys)'
  );

});

