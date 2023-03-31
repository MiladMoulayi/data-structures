var BinarySearchTree = function(value) {
  this.value = value;
};

BinarySearchTree.prototype.insert = function(val) {
  // inserts a child tree at the correct position
  // if value is less than parent tree, use this.left
  // otherwise, use this.right
  if (val < this.value) {
    if (this.left === undefined) {
      this.left = new BinarySearchTree(val);
    } else {
      this.left.insert(val);
    }
  } else {
    if (this.right === undefined) {
      this.right = new BinarySearchTree(val);
    } else {
      this.right.insert(val);
    }
  }
}

BinarySearchTree.prototype.contains = function(val) {
  if (val === this.value) {
    return true;
  }
  if (val < this.value) {
    if (this.left !== undefined) {
      return this.left.contains(val);
    }
  } else {
    if (this.right !== undefined) {
      return this.right.contains(val);
    }
  }
  return false;
}

BinarySearchTree.prototype.depthFirstLog = function(cb) {
  // if this.left is not undefined, return callback on this.left
  // else, return callback on this.value
  // if this.right is not undefined, return callback on this.right
  // else, return callback on this.value
  var traverseLeft = function () {
    if (this.left !== undefined) {
      return this.left.depthFirstLog(cb);
    }
    if (this.right !== undefined) {
      return this.right.depthFirstLog(cb);
    }
  }

  var traverseRight = function () {
    if (this.right !== undefined) {
      return this.right.depthFirstLog(cb);
    }
    if (this.left !== undefined) {
      return this.left.depthFirstLog(cb);
    }
  }

  cb(this.value);
  traverseLeft();
  traverseRight();

}


/*
 * Complexity: What is the time complexity of the above functions?
 */


// var myTree = new BinarySearchTree(6);
// myTree.insert(5);
// myTree.insert(4);
// myTree.insert(3);
// myTree.insert(6);
// myTree.insert(7);
// myTree.insert(8);
// console.log(myTree);