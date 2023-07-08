class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.rear = null;
    this.size = 0;
  }

  // Add an element to the queue
  enqueue(element) {
    const newNode = new Node(element);
    if (this.isEmpty()) {
      this.front = newNode;
      this.rear = newNode;
    } else {
      this.rear.next = newNode;
      this.rear = newNode;
    }
    this.size++;
  }

  // Remove the front element from the queue
  dequeue() {
    if (this.isEmpty()) {
      return "Underflow";
    }
    const removedNode = this.front;
    this.front = this.front.next;
    removedNode.next = null;
    if (this.front === null) {
      this.rear = null;
    }
    this.size--;
    return removedNode.value;
  }

  // Return the front element of the queue without removing it
  getFront() {
    if (this.isEmpty()) {
      return "No elements in the queue";
    }
    return this.front.value;
  }

  // Check if the queue is empty
  isEmpty() {
    return this.size === 0;
  }

  // Return the size of the queue
  getSize() {
    return this.size;
  }

  // Remove all elements from the queue
  clear() {
    this.front = null;
    this.rear = null;
    this.size = 0;
  }

  // Print the elements of the queue
  print() {
    if (this.isEmpty()) {
      console.log("Queue is empty");
      return;
    }
    let currentNode = this.front;
    let result = "";
    while (currentNode) {
      result += currentNode.value + " ";
      currentNode = currentNode.next;
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

console.log("Front element:", queue.getFront()); // Output: 10

console.log("Removing elements from the queue:");
console.log(queue.dequeue()); // Output: 10
console.log(queue.dequeue()); // Output: 20

console.log("Updated queue elements:");
queue.print(); // Output: 30 40

console.log("Is queue empty?", queue.isEmpty()); // Output: false

console.log("Queue size:", queue.getSize()); // Output: 2

queue.clear();
console.log("Cleared queue elements:");
queue.print(); // Output: Queue is empty

console.log("Is queue empty?", queue.isEmpty()); // Output: true
