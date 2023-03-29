var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var storage = {};
  var idx = 0;

  var someInstance = {
    storage: storage,
    idx: idx
  };

  _.extend(someInstance, stackMethods);

  return someInstance;
};

var stackMethods = {};

stackMethods.push = function(value) {
  this.storage[this.idx] = value;
  // this.someInstance[this.idx] = value;
  this.idx++;
}

stackMethods.pop = function() {
  this.idx--;
  var last = this.storage[this.idx];
  delete this.storage[this.idx];
  // delete this.someInstance[this.idx];
  return last;
}

stackMethods.size = function() {
  return Object.keys(this.storage).length;
}
