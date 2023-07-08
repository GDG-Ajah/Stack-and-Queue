class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

class Deque {
  constructor() {
    this.front = null;
    this.rear = null;
    this.size = 0;
  }

  // Add an element to the front of the deque
  addFront(element) {
    const newNode = new Node(element);
    if (this.isEmpty()) {
      this.front = newNode;
      this.rear = newNode;
    } else {
      newNode.next = this.front;
      this.front.prev = newNode;
      this.front = newNode;
    }
    this.size++;
  }

  // Add an element to the rear of the deque
  addRear(element) {
    const newNode = new Node(element);
    if (this.isEmpty()) {
      this.front = newNode;
      this.rear = newNode;
    } else {
      newNode.prev = this.rear;
      this.rear.next = newNode;
      this.rear = newNode;
    }
    this.size++;
  }

  // Remove and return the front element of the deque
  removeFront() {
    if (this.isEmpty()) {
      return "Underflow";
    }
    const removedNode = this.front;
    this.front = this.front.next;
    if (this.front === null) {
      this.rear = null;
    } else {
      this.front.prev = null;
    }
    removedNode.next = null;
    this.size--;
    return removedNode.value;
  }

  // Remove and return the rear element of the deque
  removeRear() {
    if (this.isEmpty()) {
      return "Underflow";
    }
    const removedNode = this.rear;
    this.rear = this.rear.prev;
    if (this.rear === null) {
      this.front = null;
    } else {
      this.rear.next = null;
    }
    removedNode.prev = null;
    this.size--;
    return removedNode.value;
  }

  // Return the front element of the deque without removing it
  getFront() {
    if (this.isEmpty()) {
      return "No elements in the deque";
    }
    return this.front.value;
  }

  // Return the rear element of the deque without removing it
  getRear() {
    if (this.isEmpty()) {
      return "No elements in the deque";
    }
    return this.rear.value;
  }

  // Check if the deque is empty
  isEmpty() {
    return this.size === 0;
  }

  // Return the size of the deque
  getSize() {
    return this.size;
  }

  // Remove all elements from the deque
  clear() {
    this.front = null;
    this.rear = null;
    this.size = 0;
  }

  // Print the elements of the deque
  print() {
    if (this.isEmpty()) {
      console.log("Deque is empty");
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
const deque = new Deque();
deque.addFront(10);
deque.addRear(20);
deque.addRear(30);
deque.addFront(40);

console.log("Deque elements:");
deque.print(); // Output: 40 10 20 30

console.log("Front element:", deque.getFront()); // Output: 40
console.log("Rear element:", deque.getRear()); // Output: 30

console.log("Removing elements from the deque:");
console.log(deque.removeFront()); // Output: 40
console.log(deque.removeRear()); // Output: 30

console.log("Updated deque elements:");
deque.print(); // Output: 10 20

console.log("Is deque empty?", deque.isEmpty()); // Output: false

console.log("Deque size:", deque.getSize()); // Output: 2

deque.clear();
console.log("Cleared deque elements:");
deque.print(); // Output: Deque is empty

console.log("Is deque empty?", deque.isEmpty()); // Output: true
