// influenced by implementation at http://babeljs.io/

module.exports = function _toConsumableArray(arrlike) {
  var arr = new Array(arrlike.length);
  var i;

  for(i = 0; i < arr.length; i++) {
    arr[i] = arrlike[i];
  }

  return arr;
};

