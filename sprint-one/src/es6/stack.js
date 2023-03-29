class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.idx = 0;
  }

  push(value) {
    this.storage[this.idx] = value;
    this.idx++;
  }

  pop() {
    this.idx--;
    var last = this.storage[this.idx];
    delete this.storage[this.idx];
    return last;
  }

  size() {
    return Object.keys(this.storage).length;
  }

}