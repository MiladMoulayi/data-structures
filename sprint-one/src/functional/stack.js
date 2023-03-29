var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var idx = 0;


  // Implement the methods below
  someInstance.push = function(value) {
    if (storage[idx] === undefined) {
      storage[idx] = value;
      someInstance[idx] = value;
      idx++;
    }
  };

  someInstance.pop = function() {
    idx--;
    var last = storage[idx];
    delete storage[idx];
    delete someInstance[idx];
    return last;
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};
