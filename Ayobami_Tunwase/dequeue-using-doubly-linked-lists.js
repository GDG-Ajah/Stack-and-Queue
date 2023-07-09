class Node {

    prevNode = null;
    nextNode = null;

    constructor(data) {
        this.data = data;
    }
}

class Dequeue {

    #head = null;
    #tail = null;

    #size = 0;
    // maximum size of the dequeue
    #limit = 5;

    constructor(...items) {
        for (const item of items) {
            this.enqueueBack(item);
        }
    }

    /**
     * Adds an item to the front of the dequeue.
     * 
     * @param {*} item item to be enqueued
     * @returns {boolean} a boolean indicating if the operation was successful
     */
    enqueueFront(item) {
        try {

            if (this.isFull()) {
                throw new Error(`Item: ${item} could not be enqueued because the dequeue is full.`);
            } else {

                const newNode = new Node(item);

                if (this.#tail === null) {
                    this.#head = newNode;
                    this.#tail = newNode;
                } else {
                    newNode.nextNode = this.#head;
                    this.#head.prevNode = newNode;
                    this.#head = newNode;
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
     * Adds an item to the back of the dequeue.
     * 
     * @param {*} item item to be enqueued
     * @returns {boolean} a boolean indicating if the operation was successful
     */
    enqueueBack(item) {
        try {
            if (this.isFull()) {
                throw new Error(`Item: ${item} could not be enqueued because the dequeue is full.`);
            } else {

                const newNode = new Node(item);

                if (this.#head === null) {
                    this.#head = newNode;
                    this.#tail = newNode;
                } else {
                    this.#tail.nextNode = newNode;
                    newNode.prevNode = this.#tail;
                    this.#tail = newNode;
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
     * Removes the item at the front of the dequeue.
     * 
     * @returns the removed item
     */
    dequeueFront() {
        try {

            if (this.isEmpty()) {
                throw new Error('Dequeue is already empty.');
            }

            const removedItem = this.#head.data;

            // if there is only one item in the dequeue
            if (this.#size === 1) {
                this.#head = null;
                this.#tail = null;
            } else {
                this.#head = this.#head.nextNode;
                this.#head.prevNode = null;
            }

            this.#size--;

            return removedItem;
        } catch (error) {
            console.error(error);
        }
    }

    /**
     * Removes the item at the back of the dequeue.
     * 
     * @returns the removed item
     */
    dequeueBack() {
        try {

            if (this.isEmpty()) {
                throw new Error('Dequeue is already empty.');
            }

            const removedItem = this.#tail.data;

            if (this.#size === 1) {
                // if there is only one item left in the dequeue

                this.#head = null;
                this.#tail = null;
            } else {
                this.#tail = this.#tail.prevNode;
                this.#tail.nextNode = null;
            }

            this.#size--;

            return removedItem;
        } catch (error) {
            console.error(error);
        }
    }

    /**
     * @returns a boolean indicating if the dequeue is empty
     */
    isEmpty() {
        return this.#size === 0;
    }

    /**
     * @returns a boolean indicating if the dequeue is full
     */
    isFull() {
        return this.#size === this.#limit;
    }

    /**
     * @returns the item at the front of the dequeue
     */
    peekFront() {
        return this.#head;
    }

    /**
     * @returns the item at the back of the dequeue
     */
    peekBack() {
        return this.#tail;
    }

    /**
     * @returns the number of items in the dequeue
     */
    size() {
        return this.#size;
    }

    /**
     * Removes all the items in the dequeue.
     */
    clear() {
        this.#head = null;
        this.#tail = null;
    }

    /**
     * Prints out the items in the dequeue.
     */
    print() {
        if (this.isEmpty()) {
            console.log('Dequeue is empty.');
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

const dequeue = new Dequeue('hello', 'world', 'are', 'you', 'good');

console.log(dequeue.dequeueFront());
console.log(dequeue.dequeueFront());
console.log(dequeue.dequeueFront());
// console.log(dequeue.dequeueBack());
dequeue.enqueueFront('JavaScript')
dequeue.enqueueBack('Python')


console.log(dequeue.size());

dequeue.print()

console.log(dequeue.peekBack())
