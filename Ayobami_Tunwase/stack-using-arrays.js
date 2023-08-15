class Stack {

    data = [];

    constructor(...items) {
        for (const item of items) {
            this.data.push(item);
        }
    }

    /**
     * Adds an item to the top of the stack.
     * 
     * @param {*} item the value to be added to the stack
     */
    push(item) {
        this.data.push(item);
    }

    /**
     * Removes the item at the top of the stack.
     * 
     * @returns the item at the top of the stack
     */
    pop() {
        if (this.isEmpty()) {
            console.log('Stack is empty');
        } else {

            return this.data.pop();
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
            return this.data[this.data.length - 1];
        }

    }

    /**
     * 
     * @returns the size of the stack
     */
    size() {
        return this.data.length;
    }

    /**
     * 
     * @param {*} item the value to check the stack for
     * @returns a boolean indicating if an item is in the stack
     */
    search(item) {
        for (let i = this.data.length - 1; i >= 0; i++) {
            if (this.data[i] === item) {
                return true;
            }
        }

        return false;
    }

    /**
     * 
     * @returns a boolean indicating if the stack is empty
     */
    isEmpty() {
        return this.data.length === 0;
    }

    /**
     * Prints out all the items of the stack.
     */
    print() {
        for (let i = this.data.length - 1; i >= 0; i--) {
            console.log(this.data[i]);
        }
    }

    /**
     * Removes all the items in the stack.
     */
    clear() {
        this.data = [];
    }
}

const mine = new Stack('Twitter', 'Facebook', 'Snapchat', 'Threads', 'Linkedin');

console.log(mine.pop())
console.log(mine.pop())


// mine.clear();
mine.peek()

mine.print()
