var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  newTree.children = [];

  Object.assign(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var newChild = Tree(value);
  this.children.push(newChild);
};

treeMethods.contains = function(target) {
  if (this.value === target) {
    return true;
  }
  for (var i = 0; i < this.children.length; i++) {
    var child = this.children[i];
    if(child.contains(target)) {
      return true;
    }
  }
  return false;
}

/*
 * Complexity: What is the time complexity of the above functions?
 */
