

// Instantiate a new graph
var Graph = function() {
  this.storage = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  // check if node is already in storage
  // if it's not, then add to storage object at key
  // value is going to be empty array
  if (this.storage[node] === undefined) {
    this.storage[node] = [];
  }
  // {'node': []};
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  // return true if storage[node] !== undefined
  return (this.storage[node] !== undefined);
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  // if the node exists in storage, remove edges from other nodes that have edges with node
  if (this.storage[node] !== undefined) {
    var nodeArray = this.storage[node].slice();
    for (var i = 0; i < nodeArray.length; i++) {
      this.removeEdge(node, nodeArray[i]);
    }
    delete this.storage[node];
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  // check if fromNode has toNode in its array
  // return true if it does
  return (this.storage[fromNode] && this.storage[fromNode].indexOf(toNode) !== -1);
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  // if it contains fromNode and toNode
  // push toNode to fromNode array
  // push fromNode to toNode array
  if (this.contains(fromNode) && this.contains(toNode)) {
    this.storage[fromNode].push(toNode);
    this.storage[toNode].push(fromNode);
  }
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  // if hasEdge, filter fromNode to only have elements that are not toNode
  if (this.hasEdge(fromNode, toNode)) {
    this.storage[fromNode] = this.storage[fromNode].filter(function(element) {
      return element !== toNode;
    });
    this.storage[toNode] = this.storage[toNode].filter(function(element) {
      return element !== fromNode;
    });
  }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  // use for loop on storage
  // call callback for each key in storage
  for (var key in this.storage) {
    cb(key);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


