class Stack {
  constructor() {
    this.items = [];
  }

  // Add an element to the stack
  push(element) {
    this.items.push(element);
  }

  // Remove the top element from the stack
  pop() {
    if (this.isEmpty()) {
      return "Underflow";
    }
    return this.items.pop();
  }

  // Return the top element of the stack without removing it
  peek() {
    if (this.isEmpty()) {
      return "No elements in the stack";
    }
    return this.items[this.items.length - 1];
  }

  // Check if the stack is empty
  isEmpty() {
    return this.items.length === 0;
  }

  // Return the size of the stack
  size() {
    return this.items.length;
  }

  // Remove all elements from the stack
  clear() {
    this.items = [];
  }

  // Print the elements of the stack
  print() {
    let result = "";
    for (let i = 0; i < this.items.length; i++) {
      result += this.items[i] + " ";
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
stack.print(); // Output: 10 20 30 40

console.log("Top element:", stack.peek()); // Output: 40

console.log("Removing elements from the stack:");
console.log(stack.pop()); // Output: 40
console.log(stack.pop()); // Output: 30

console.log("Updated stack elements:");
stack.print(); // Output: 10 20

console.log("Is stack empty?", stack.isEmpty()); // Output: false

console.log("Stack size:", stack.size()); // Output: 2

stack.clear();
console.log("Cleared stack elements:");
stack.print(); // Output: (empty)

console.log("Is stack empty?", stack.isEmpty()); // Output: true
