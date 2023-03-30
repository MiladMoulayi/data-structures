var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    if (list.head === null) {
      list.head = Node(value);
      list.tail = Node(value);
      return;
    }
    list.tail.next = Node(value);
    if (list.head.next === null) {
      list.head.next = list.tail.next;
    }
    list.tail = list.tail.next;
  };

  list.removeHead = function() {
    if (list.head === null) {
      return;
    }
    var last = list.head.value;
    list.head = list.head.next;
    return last;
  };

  list.contains = function(target, node) {
      if (node === undefined) {
        node = list.head;
      }
      if (node.value === target) {
        return true;
      }
      if (node.next !== null) {
        return list.contains(target, node.next)
      }
      return false;
  };

  return list;
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
