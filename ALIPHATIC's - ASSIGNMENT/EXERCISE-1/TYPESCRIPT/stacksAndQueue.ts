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


// 2. Implement a Stack using a Linked List
class Node {
    value: any;
    next: Node | null;
    constructor(value: any) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    private top: Node | null;
    private bottom: Node | null;
    private length: number;
    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }
    
    peek() {
        return this.top;
    }
    
    push(value: any) {
        const newNode = new Node(value);
        if (this.length === 0) {
        this.top = newNode;
        this.bottom = newNode;
        } else {
        const holdingPointer = this.top;
        this.top = newNode;
        this.top.next = holdingPointer;
        }
        this.length++;
        return this;
    }
    
    pop() {
        if (!this.top) {
        return null;
        }
        if (this.top === this.bottom) {
        this.bottom = null;
        }
        const holdingPointer = this.top;
        this.top = this.top.next;
        this.length--;
        return holdingPointer;
    }
    
    isEmpty() {
        return this.length === 0;
    }
    }


// 3. Implement a Queue using an Array
class Queue {
    private queue: any[];
    constructor() {
        this.queue = [];
    }
    
    enqueue(value: any) {
        this.queue.push(value);
    }
    
    dequeue() {
        return this.queue.shift();
    }
    
    peek() {
        return this.queue[0];
    }
    
    isEmpty() {
        return this.queue.length === 0;
    }
    }

    