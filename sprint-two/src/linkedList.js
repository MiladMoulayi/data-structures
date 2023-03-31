var LinkedList = function() {
  var list = {};                                                // O(1)
  list.head = null;                                             // O(1)
  list.tail = null;                                             // O(1)

  list.addToTail = function(value) {
    var newNode = Node(value);                                  // O(1)
    if (list.head === null) {                                   // O(1)
      list.head = newNode;                                      // O(1)
    } else {                                                    // O(1)
      list.tail.next = newNode;                                 // O(1)
    }
    list.tail = newNode;                                        // O(1)
  };

  // overall time complexity: O(1)

  list.removeHead = function() {
    if (list.head === null) {                                  // O(1)
      return null;                                             // O(1)
    }
    var last = list.head.value;                                // O(1)
    list.head = list.head.next;                                // O(1)
    if (list.head === null) {                                  // O(1)
      list.tail = null;                                        // O(1)
    }
    return last;                                               // O(1)
  };

  // overall time complexity: O(1)

  list.contains = function(target, node) {
      console.log('list: ', list);
      if (node === undefined) {                                       // O(1)
        node = list.head;                                             // O(1)
      }                                                               // O(1)
      console.log('node: ', node);
      if (node === null) {                                            // O(1)
        return false;                                                 // O(1)
      }
      if (node.value === target) {                                    // O(1)
        return true;                                                  // O(1)
      }
      return list.contains(target, node.next);                        // O(1)
  };

  // b/c contains called recursively n times, overall time complexity is O(n)

  return list;                                                        // O(1)
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
