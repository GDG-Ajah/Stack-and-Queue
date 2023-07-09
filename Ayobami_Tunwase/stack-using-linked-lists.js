class Node {

    nextNode = null;

    constructor(data) {
        this.data = data;
    }
}


class Stack {

    #head = null;
    #size = 0;

    constructor(...items) {
        for (const item of items) {
            this.push(item);
        }
    }

    /**
     * Adds an item to the top of the stack.
     * 
     * @param {*} item the value to be added to the stack0
     */
    push(item) {
        const newNode = new Node(item);

        if (this.isEmpty()) {
            this.#head = newNode;

        } else {
            newNode.nextNode = this.#head;
            this.#head = newNode;
        }

        this.#size++;
    }

    /**
     * Removes the item at the top of the stack.
     * 
     * @returns the item at the top of the stack
     */
    pop() {
        if (this.isEmpty()) {
            console.log('Stack is empty.');
        } else {

            const removedNode = this.#head;
            this.#head = this.#head.nextNode;

            this.#size--;
            return removedNode;
        }
    }

    /**
     * 
     * @returns the item at the top of the stack
     */
    peek() {
        if (this.isEmpty()) {
            console.log('Stack is empty.');
        } else {
            return this.#head;
        }
    }

    /**
     * 
     * @returns the size of the stack
     */
    size() {
        return this.#size;
    }

    /**
     * 
     * @param {*} item the value to check the stack for
     * @returns a boolean indicating if an item is in the stack
     */
    search(item) {
        let currentNode = this.#head;

        while (currentNode !== null) {

            if (currentNode.data === item) {
                return true;
            }

            currentNode = currentNode.nextNode;
        }

        return false;
    }

    /**
     * 
     * @returns a boolean indicating if the stack is empty
     */
    isEmpty() {
        return this.#head === null;
    }

    /**
     * Prints out all the items of the stack.
     */
    print() {
        if (this.isEmpty()) {
            console.log('(empty)')
        } else {

            let currentNode = this.#head;

            let output = '';

            while (currentNode.nextNode !== null) {

                output += currentNode.data + ' -> ';

                currentNode = currentNode.nextNode;
            }

            output += currentNode.data;

            console.log(output);
        }
    }

    /**
     * Removes all the items in the stack.
     */
    clear() {
        this.#head = null;
    }
}

const stack = new Stack();

console.log(stack.search('Sevilla'));


stack.push('Aston Villa');
stack.push('Manchester United');
stack.push('Real Madrid');

console.log(stack.size())
// console.log(stack.pop())
// console.log(stack.pop())

console.log(stack.peek())


stack.print()


