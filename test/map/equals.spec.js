const test = require('tape');
const Aeterna = require('../..');
const Map = Aeterna.Map;

test('equals', (t) => {
  t.plan(6);

  const m = Map({ a: 1 });
  t.true(
    m.equals(m),
    'should find work for references'
  );

  t.true(
    Map({ a: 1 }).equals(Map({ a: 1 })),
    'should find equality in flat structures'
  );

  t.true(
    Map({ a: Map({ b: Map({ c: 3 }) }) })
      .equals(Map({ a: Map({ b: Map({ c: 3 }) }) })),
    'should find equality in nested structures'
  );

  t.false(
    Map({ a: 1 }).equals({ a: 2 }),
    'should find inequality in flat structures'
  );

  t.false(
    Map({ a: Map({ b: 2, c: 3 }) })
      .equals(Map({ a: Map({ b: 2, c: 4 }) })),
    'should find inequality in nested structure'
  );

  t.throws(
    () => Map({ }).equals(),
    Error,
    'should throw when called with no args'
  );

});

