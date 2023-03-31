var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {};
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  // take item as key, store in set._storage with value
  this._storage[item] = 1;
};

setPrototype.contains = function(item) {
  // if item is not undefined, return true
  return (this._storage[item] !== undefined);
};

setPrototype.remove = function(item) {
  // delete this._storage[item]
  delete this._storage[item];
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
