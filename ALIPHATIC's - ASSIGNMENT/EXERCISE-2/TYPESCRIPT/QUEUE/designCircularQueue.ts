/** Design Circular Queue
 Design your implementation of the circular queue. The circular queue is a linear data structure in which the operations are performed based on FIFO (First In First Out) principle, and the last position is connected back to the first position to make a circle. It is also called "Ring Buffer".

One of the benefits of the circular queue is that we can make use of the spaces in front of the queue. In a normal queue, once the queue becomes full, we cannot insert the next element even if there is a space in front of the queue. But using the circular queue, we can use the space to store new values.

Implement the MyCircularQueue class:

MyCircularQueue(k) Initializes the object with the size of the queue to be k.
int Front() Gets the front item from the queue. If the queue is empty, return -1.
int Rear() Gets the last item from the queue. If the queue is empty, return -1.
boolean enQueue(int value) Inserts an element into the circular queue. Return true if the operation is successful.
boolean deQueue() Deletes an element from the circular queue. Return true if the operation is successful.
boolean isEmpty() Checks whether the circular queue is empty or not.
boolean isFull() Checks whether the circular queue is full or not.
You must solve the problem without using the built-in queue data structure in your programming language. 

 

Example 1:

Input
["MyCircularQueue", "enQueue", "enQueue", "enQueue", "enQueue", "Rear", "isFull", "deQueue", "enQueue", "Rear"]
[[3], [1], [2], [3], [4], [], [], [], [4], []]
Output
[null, true, true, true, false, 3, true, true, true, 4]

Explanation
MyCircularQueue myCircularQueue = new MyCircularQueue(3);
myCircularQueue.enQueue(1); // return True
myCircularQueue.enQueue(2); // return True
myCircularQueue.enQueue(3); // return True
myCircularQueue.enQueue(4); // return False
myCircularQueue.Rear();     // return 3
myCircularQueue.isFull();   // return True
myCircularQueue.deQueue();  // return True
myCircularQueue.enQueue(4); // return True
myCircularQueue.Rear();     // return 4
 

Constraints:

1 <= k <= 1000
0 <= value <= 1000
At most 3000 calls will be made to enQueue, deQueue, Front, Rear, isEmpty, and isFull.
 */

class MyCircularQueue {
    private queue: number[];
    private front: number;
    private rear: number;
    private size: number;
  
    constructor(k: number) {
      this.queue = new Array(k);
      this.front = -1;
      this.rear = -1;
      this.size = k;
    }
  
    enQueue(value: number): boolean {
      if (this.isFull()) {
        return false;
      }
      if (this.isEmpty()) {
        this.front = 0;
      }
      this.rear = (this.rear + 1) % this.size;
      this.queue[this.rear] = value;
      return true;
    }
  
    deQueue(): boolean {
      if (this.isEmpty()) {
        return false;
      }
      if (this.front === this.rear) {
        this.front = -1;
        this.rear = -1;
        return true;
      }
      this.front = (this.front + 1) % this.size;
      return true;
    }
  
    Front(): number {
      if (this.isEmpty()) {
        return -1;
      }
      return this.queue[this.front];
    }
  
    Rear(): number {
      if (this.isEmpty()) {
        return -1;
      }
      return this.queue[this.rear];
    }
  
    isEmpty(): boolean {
      return this.front === -1;
    }
  
    isFull(): boolean {
      return (this.rear + 1) % this.size === this.front;
    }
  }
  

/**
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */


const myCircularQueue = new MyCircularQueue(3);
myCircularQueue.enQueue(1);  // Returns true
myCircularQueue.enQueue(2);  // Returns true
myCircularQueue.enQueue(3);  // Returns true
myCircularQueue.enQueue(4);  // Returns false
myCircularQueue.Rear();      // Returns 3
myCircularQueue.isFull();    // Returns true
myCircularQueue.deQueue();   // Returns true
myCircularQueue.enQueue(4);  // Returns true
myCircularQueue.Rear();      // Returns 4
