var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newStack = Object.create(stackMethods);
  newStack.storage = {};
  newStack.idx = 0;

  return newStack;
};

var stackMethods = {};

stackMethods.push = function(value) {
  this.storage[this.idx] = value;
  this.idx++;
}

stackMethods.pop = function() {
  this.idx--;
  var last = this.storage[this.idx];
  delete this.storage[this.idx];
  return last;
}

stackMethods.size = function() {
  return Object.keys(this.storage).length;
}


