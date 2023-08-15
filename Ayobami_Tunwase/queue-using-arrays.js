// circular queue implementation
class Queue {

    #head = -1;
    #tail = -1;

    #size = 0;
    #limit = 5;

    data = [];

    constructor(...items) {
        for (const item of items) {
            this.enqueue(item);
        }
    }

    enqueue(item) {
        try {

            if (this.isFull()) {
                throw new Error(`Item: ${item} could not be enqueued because the queue is full.`);
            }


            this.#tail = ++this.#tail % this.#limit;

            this.data[this.#tail] = item;

            this.#size++;

        } catch (error) {
            console.error(error);

            return false;
        }
    }

    dequeue() {

        try {

            if (this.isEmpty()) {
                throw new Error('Queue is already empty.');
            }

            this.#head = ++this.#head % this.#limit;

            /* using the delete operator is not necessary, overwriting the value to be 'deleted'
                in subsequent operations is sufficient; did so as to have a clearer picture of what was going on
            */
            delete this.data[this.#head];

            this.#size--;
        } catch (error) {
            console.error(error);
        }
    }

    /**
     * @returns the item at the front of the queue
     */
    peek() {
        console.log(this.#head, this.#tail)

        if (this.isEmpty()) {
            console.log('Queue is empty.');
        } else {
            return this.data[this.#head === this.#limit - 1 ? 0 : this.#head + 1];
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
     * @returns the number of items in the queue
     */
    size() {
        return this.#size;
    }

    /**
     * Removes all the items in the queue.
     */
    clear() {
        this.data = [];
        this.#head = 0;
        this.#tail = 0;
        this.#size = 0;
    }

    /**
     * Prints out all the items of the queue starting from the front.
     */
    print() {

        if (this.isEmpty()) {
            console.log('Queue is empty.');
        } else {

            let i = this.#head === this.#limit - 1 ? 0 : this.#head + 1;

            let output = '';

            for (let count = 0; count < this.#size; count++) {

                output += this.data[i];

                // if we are not at the last item in the queue
                if (count < this.#size - 1) {
                    output += ' -> ';
                }

                if (i === this.#limit - 1) {
                    // reset the index if when we reach the end of the queue
                    i = 0;
                } else {
                    i++;
                }
            }

            console.log(output);
        }
    }
}

const queue = new Queue('football', 'rugby', 'cricket', 'chess', 'tennis');
// const queue = new Queue();

// had to test exhaustively :)
queue.dequeue();
queue.dequeue();
queue.enqueue('hello');
queue.dequeue();

queue.enqueue('mme');
queue.enqueue('mme');
console.log(queue.peek())

queue.dequeue();
queue.dequeue();
queue.dequeue();
queue.dequeue();
queue.dequeue();

queue.enqueue('ssg')
queue.enqueue('bme')

// queue.dequeue()
// queue.enqueue('eeg')
queue.dequeue()
// queue.dequeue()

// queue.enqueue('ayo')
// queue.enqueue('bami')

// queue.dequeue()
// queue.dequeue()

// queue.enqueue('bread')
// queue.enqueue('egg')

// queue.dequeue()
// queue.enqueue('javascript')
// queue.dequeue()
// queue.enqueue('python')
// queue.dequeue()
// queue.enqueue(2)
// queue.enqueue(3)
// queue.dequeue()
// queue.enqueue(4)
// queue.enqueue(4)
// queue.dequeue()
queue.enqueue(14)
queue.enqueue(15)
// queue.dequeue()
queue.enqueue(15)

queue.print()
console.log(queue.peek())

console.log(queue.isEmpty())
console.log(queue.size())
console.log(queue.isFull())