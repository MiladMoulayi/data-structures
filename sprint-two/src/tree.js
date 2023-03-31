var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];

  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var newChild = Tree(value);
  this.children.push(newChild);
};

treeMethods.contains = function(target, node) {

  node = node || this.children;

  var traverse = function(target, node) {
    if (node.value === target) {
      return true;
    } else if (node.children.length > 0) {
      for (var j = 0; j < node.children.length; j++) {
        return traverse(target, node.children[j]);
      }
    } else {
      return false;
    }
  }

  for (var i = 0; i < node.length; i++) {
    var targetMatch = traverse(target, node[i]);
    if (targetMatch) {
      return true;
    }
  }

  return false;

}


/*
 * Complexity: What is the time complexity of the above functions?
 */
