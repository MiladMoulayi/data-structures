var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newQueue = Object.create(queueMethods);
  newQueue.storage = {};
  newQueue.idx = 0;

  return newQueue;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  this.storage[this.idx] = value;
  this.idx++;
}

queueMethods.dequeue = function(value) {
  var first = this.storage[0];
  var len = Object.keys(this.storage).length;
  for (var i = 0; i < len - 1; i++) {
    this.storage[i] = this.storage[i + 1];
  }
  delete this.storage[len - 1];
  this.idx--;
  return first;
}

queueMethods.size = function(value) {
  return Object.keys(this.storage).length;
}


