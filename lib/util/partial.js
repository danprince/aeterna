const _toConsumableArray = require('../internals/_to-consumable-array');

module.exports = function partial(f, arg1, arg2, arg3) {
  var args = arguments;

  if(args.length == 0) {
    throw new Error('Expected function for partial');
  }

  if(typeof f != 'function') {
    throw new TypeError('Partial expected f to be a function');
  }

  if(args.length == 1) {
    return f;
  }

  if(args.length == 2) {
    return function partial1(x, y, z) {
      var args = arguments;
      if(args.length == 0) return f(arg1);
      if(args.length == 1) return f(arg1, x);
      if(args.length == 2) return f(arg1, x, y);
      if(args.length == 3) return f(arg1, x, y, z);

      var _args = _toConsumableArray(args);
      return f.call(null, [arg1].concat(_args));
    };
  }

  if(args.length == 3) {
    return function partial2(x, y, z) {
      var args = arguments;
      if(args.length == 0) return f(arg1, arg2);
      if(args.length == 1) return f(arg1, arg2, x);
      if(args.length == 2) return f(arg1, arg2, x, y);
      if(args.length == 3) return f(arg1, arg2, x, y, z);

      var _args = _toConsumableArray(args);
      return f.call(null, [arg1, arg2].concat(_args));
    };
  }

  if(args.length == 4) {
    return function partial3(x, y, z) {
      var args = arguments;
      if(args.length == 0) return f(arg1, arg2, arg3);
      if(args.length == 1) return f(arg1, arg2, arg3, x);
      if(args.length == 2) return f(arg1, arg2, arg3, x, y);
      if(args.length == 3) return f(arg1, arg2, arg3, x, y, z);

      var _args = _toConsumableArray(args);
      return f.call(null, [arg1, arg2, arg3].concat(_args));
    };
  }

  var _args = [].slice.call(args);
  return function partial4() {
    var args = _toConsumableArray(arguments);
    return f.apply(_args.concat(args));
  };
};

