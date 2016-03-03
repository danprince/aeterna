module.exports = function comp(f, g) {
  var fs = arguments;

  if(fs.length == 0) {
    throw new Error('Can\'t compose nothing');
  }

  // don't bother wrapping the return value in a function
  // if only one argument was supplied, just return it.
  if(fs.length == 1) {
    return f;
  }

  // we can hardcode function application for compose
  // calls involving two functions to improve on the
  // performance of using apply.
  if(fs.length == 2) {
    return function comp2(x, y, z) {
      var argsCount = arguments.length;

      if(argsCount == 0) {
        return f(g());
      }
      if(argsCount == 1) {
        return f(g(x));
      }
      if(argsCount == 2) {
        return f(g(x, y));
      }
      if(argsCount == 3) {
        return f(g(x, y, z));
      } else {
        return f(g.apply(null, arguments));
      }
    };
  }

  return function comp3() {
    // invoke first function to get initial accumulator
    var acc = fs[0].apply(null, arguments);
    var i;

    // skip first function and accumulate through the rest
    for(i = 1; i < fs.length; i++) {
      acc = fs[i].call(null, acc);
    }

    return acc;
  };
};

