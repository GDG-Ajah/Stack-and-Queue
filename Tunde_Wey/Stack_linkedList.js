class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.size = 0;
  }

  // Add an element to the stack
  push(element) {
    const newNode = new Node(element);
    if (this.isEmpty()) {
      this.top = newNode;
    } else {
      newNode.next = this.top;
      this.top = newNode;
    }
    this.size++;
  }

  // Remove the top element from the stack
  pop() {
    if (this.isEmpty()) {
      return "Underflow";
    }
    const removedNode = this.top;
    this.top = removedNode.next;
    removedNode.next = null;
    this.size--;
    return removedNode.value;
  }

  // Return the top element of the stack without removing it
  peek() {
    if (this.isEmpty()) {
      return "No elements in the stack";
    }
    return this.top.value;
  }

  // Check if the stack is empty
  isEmpty() {
    return this.size === 0;
  }

  // Return the size of the stack
  getSize() {
    return this.size;
  }

  // Remove all elements from the stack
  clear() {
    this.top = null;
    this.size = 0;
  }

  // Print the elements of the stack
  print() {
    if (this.isEmpty()) {
      console.log("Stack is empty");
      return;
    }
    let currentNode = this.top;
    let result = "";
    while (currentNode) {
      result += currentNode.value + " ";
      currentNode = currentNode.next;
    }
    console.log(result.trim());
  }
}

// Example usage:
const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);
stack.push(40);

console.log("Stack elements:");
stack.print(); // Output: 40 30 20 10

console.log("Top element:", stack.peek()); // Output: 40

console.log("Removing elements from the stack:");
console.log(stack.pop()); // Output: 40
console.log(stack.pop()); // Output: 30

console.log("Updated stack elements:");
stack.print(); // Output: 20 10

console.log("Is stack empty?", stack.isEmpty()); // Output: false

console.log("Stack size:", stack.getSize()); // Output: 2

stack.clear();
console.log("Cleared stack elements:");
stack.print(); // Output: Stack is empty

console.log("Is stack empty?", stack.isEmpty()); // Output: true
