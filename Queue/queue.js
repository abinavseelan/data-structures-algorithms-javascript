// Constructor for our Queue entity
function Queue() {
  this.storage = [];
  this.size = 0;
}

Queue.prototype.enqueue = function (value) {
  // Add the value to the end of the queue.
  this.storage[this.size] = value;
  this.size = this.size + 1;
};

Queue.prototype.dequeue = function () {
  // Remove a value from the front of the queue.
  if (this.size === 0) {
    // If the queue is empty, return null
    return null;
  }

  const value = this.storage[0];
  const newArray = this.storage.slice(1, this.size);

  this.storage = [...newArray];
  this.size = this.size - 1;
  return value;
};
