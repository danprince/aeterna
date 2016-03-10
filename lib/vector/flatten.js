module.exports = function flatten() {
  var stack = [this];
  var flat = [];

  var node, i;
  while(stack.length) {
    node = stack.pop();

    if(node instanceof Array) {
      for(i = 0; i < node.length; i++) {
        stack.push(node[i]);
      }
    } else {
      flat.unshift(node);
    }
  }

  return flat;
};

