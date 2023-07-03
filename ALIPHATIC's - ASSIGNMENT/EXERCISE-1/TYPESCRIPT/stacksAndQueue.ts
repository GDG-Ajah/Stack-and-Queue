/**
 1. Implement a Stack using an Array
 2. Implement a Stack using a Linked List
 3. Implement a Queue using an Array
 4. Implement a Queue using a Linked List
 5. Implement a Queue using a Doubly Linked List
 */

// 1. Implement a Stack using an Array
class Stack {
    private stack: any[];
    constructor() {
        this.stack = [];
    }
    
    push(value: any) {
        this.stack.push(value);
    }
    
    pop() {
        return this.stack.pop();
    }
    
    peek() {
        return this.stack[this.stack.length - 1];
    }
    
    isEmpty() {
        return this.stack.length === 0;
    }
    }
