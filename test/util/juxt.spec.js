const test = require('tape');
const _ = require('../..');

function inc(x) { return x + 1; }
function id(x)  { return x; }
function dec(x) { return x - 1; }

test('juxt', (t) => {
  t.plan(9);

  t.throws(
    () => _.juxt(),
    Error,
    'should throw when provided with no args'
  );

  t.equals(
    'juxt1',
    _.juxt(id).name,
    'should return optimized form for 1 argument'
  );

  t.equals(
    'juxt2',
    _.juxt(inc, dec).name,
    'should return optimized form for 2 arguments'
  );

  t.equals(
    'juxt3',
    _.juxt(inc, id, dec).name,
    'should return optimized form for 3 arguments'
  );

  t.equals(
    'juxt4',
    _.juxt(inc, dec, inc, dec).name,
    'should return un-optimized form for >= 4 arguments'
  );

  t.deepEquals(
    _.Vector([10]),
    _.juxt(id)(10),
    'should juxt a single function'
  );

  t.deepEquals(
    _.Vector([4, 6]),
    _.juxt(dec, inc)(5),
    'should juxt two functions'
  );

  t.deepEquals(
    _.Vector([-1, 0, 1]),
    _.juxt(dec, id, inc)(0),
    'should juxt three functions'
  );

  t.deepEquals(
    _.Vector([-1, -1, 1, 1]),
    _.juxt(dec, dec, inc, inc)(0),
    'should juxt four functions'
  );
});

