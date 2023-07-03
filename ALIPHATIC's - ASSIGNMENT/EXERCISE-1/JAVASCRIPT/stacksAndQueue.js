/**
 1. Implement a Stack using an Array
 2. Implement a Stack using a Linked List
 3. Implement a Queue using an Array
 4. Implement a Queue using a Linked List
 5. Implement a Queue using a Doubly Linked List
 */



// 1. Implement a Stack using an Array
class Stack {
    constructor() {
        this.items = [];
    }

    push(element) {
        this.items.push(element);
    }

    pop() {
        if(this.items.length == 0)
            return "Underflow";
        return this.items.pop();
    }

    peek() {
        return this.items[this.items.length - 1];
    }

    isEmpty() {
        return this.items.length == 0;
    }

    printStack() {
        var str = "";
        for(var i = 0; i < this.items.length; i++)
            str += this.items[i] + " ";
        return str;
    }
}

