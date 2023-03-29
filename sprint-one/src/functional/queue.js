var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var idx = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[idx] = value;
    idx++;
  };

  someInstance.dequeue = function() {
    var first = storage[0];
    var len = Object.keys(storage).length;
    for (var i = 0; i < len - 1; i++) {
      storage[i] = storage [i + 1];
    }
    delete storage[len - 1];
    idx--;
    return first;
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};
