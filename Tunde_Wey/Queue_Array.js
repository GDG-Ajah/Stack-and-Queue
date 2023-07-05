class Queue {
  constructor() {
    this.items = [];
  }

  // Add an element to the queue
  enqueue(element) {
    this.items.push(element);
  }

  // Remove the front element from the queue
  dequeue() {
    if (this.isEmpty()) {
      return "Underflow";
    }
    return this.items.shift();
  }

  // Return the front element of the queue without removing it
  front() {
    if (this.isEmpty()) {
      return "No elements in the queue";
    }
    return this.items[0];
  }

  // Check if the queue is empty
  isEmpty() {
    return this.items.length === 0;
  }

  // Return the size of the queue
  size() {
    return this.items.length;
  }

  // Remove all elements from the queue
  clear() {
    this.items = [];
  }

  // Print the elements of the queue
  print() {
    let result = "";
    for (let i = 0; i < this.items.length; i++) {
      result += this.items[i] + " ";
    }
    console.log(result.trim());
  }
}

// Example usage:
const queue = new Queue();
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.enqueue(40);

console.log("Queue elements:");
queue.print(); // Output: 10 20 30 40

console.log("Front element:", queue.front()); // Output: 10

console.log("Removing elements from the queue:");
console.log(queue.dequeue()); // Output: 10
console.log(queue.dequeue()); // Output: 20

console.log("Updated queue elements:");
queue.print(); // Output: 30 40

console.log("Is queue empty?", queue.isEmpty()); // Output: false

console.log("Queue size:", queue.size()); // Output: 2

queue.clear();
console.log("Cleared queue elements:");
queue.print(); // Output: (empty)

console.log("Is queue empty?", queue.isEmpty()); // Output: true
