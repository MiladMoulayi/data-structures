var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  this.storage = {};
  this.idx = 0;

};

Stack.prototype.push = function(value) {
  this.storage[this.idx] = value;
  this.idx++;
}

Stack.prototype.pop = function() {
  this.idx--;
  var last = this.storage[this.idx];
  delete this.storage[this.idx];
  return last;
}

Stack.prototype.size = function() {
  return Object.keys(this.storage).length;
}
