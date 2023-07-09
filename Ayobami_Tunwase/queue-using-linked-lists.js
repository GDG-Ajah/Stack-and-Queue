class Node {

    nextNode = null;

    constructor(data) {
        this.data = data;
    }
}

class Queue {

    #head = null;
    #tail = null;

    #size = 0;
    // maximum size of the queue
    #limit = 5;

    constructor(...items) {
        for (const item of items) {
            this.enqueue(item);
        }
    }

    /**
     * Adds an item to the back of the queue.
     * 
     * @param {*} item item to be enqueued
     * @returns {boolean} a boolean indicating if the operation was successful
     */
    enqueue(item) {
        try {

            if (this.isFull()) {
                throw new Error(`Item: ${item} could not be enqueued because the queue is full.`);
            } else {

                const newNode = new Node(item);

                if (this.#head === null) {
                    this.#head = newNode;
                    this.#tail = newNode
                } else {
                    this.#tail.nextNode = newNode;
                    this.#tail = this.#tail.nextNode;
                }

                this.#size++;

                return true;
            }
        } catch (error) {
            console.error(error);

            return false;
        }
    }

    /**
     * Removes the item at the front of the queue.
     * 
     * @returns the removed item
     */
    dequeue() {
        try {

            if (this.isEmpty()) {
                throw new Error('Queue is already empty.');
            } else {
                const removedItem = this.#head.data;

                this.#head = this.#head.nextNode;

                this.#size--;

                return removedItem;
            }
        } catch (error) {
            console.error(error);
        }
    }

    /**
     * @returns a boolean indicating if the queue is empty
     */
    isEmpty() {
        return this.#size === 0;
    }

    /**
     * @returns a boolean indicating if the queue is full
     */
    isFull() {
        return this.#size === this.#limit;
    }

    /**
     * @returns the item at the front of the queue
     */
    peekFront() {
        return this.#head;
    }

    /**
     * @returns the item at the back of the queue
     */
    peekBack() {
        return this.#tail;
    }

    /**
     * @returns the number of items in the queue
     */
    size() {
        return this.#size;
    }

    /**
     * Removes all the items in the queue.
     */
    clear() {
        this.#head = null;
        this.#tail = null;
    }

    print() {
        if (this.isEmpty()) {
            console.log('Queue is empty.');
        } else {

            let output = '';

            let currentNode = this.#head;

            while (currentNode.nextNode !== null) {
                output += currentNode.data + ' -> ';

                currentNode = currentNode.nextNode;
            }

            // appends the data at the tail
            output += currentNode.data;

            console.log(output);
        }
    }

}

const queue = new Queue(1, 2, 3, 4, 5);

console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());


console.log(queue.peekFront())

queue.print()