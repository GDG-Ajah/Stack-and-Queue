/** Min Stack
 Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

Implement the MinStack class:

MinStack() initializes the stack object.
void push(int val) pushes the element val onto the stack.
void pop() removes the element on the top of the stack.
int top() gets the top element of the stack.
int getMin() retrieves the minimum element in the stack.
You must implement a solution with O(1) time complexity for each function.

 

Example 1:

Input
["MinStack","push","push","push","getMin","pop","top","getMin"]
[[],[-2],[0],[-3],[],[],[],[]]

Output
[null,null,null,null,-3,null,0,-2]

Explanation
MinStack minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.getMin(); // return -3
minStack.pop();
minStack.top();    // return 0
minStack.getMin(); // return -2
 

Constraints:

-231 <= val <= 231 - 1
Methods pop, top and getMin operations will always be called on non-empty stacks.
At most 3 * 104 calls will be made to push, pop, top, and getMin.

  Hint #1  
Consider each node in the stack having a minimum value
 */

class MinStack {
    constructor() {
      this.stack = [];
      this.minStack = [];
    }
  
    push(val) {
      this.stack.push(val);
      if (this.minStack.length === 0 || val <= this.minStack[this.minStack.length - 1]) {
        this.minStack.push(val);
      }
    }
  
    pop() {
      if (this.stack.length === 0) {
        return;
      }
      const poppedElement = this.stack.pop();
      if (poppedElement === this.minStack[this.minStack.length - 1]) {
        this.minStack.pop();
      }
    }
  
    top() {
      if (this.stack.length === 0) {
        return null;
      }
      return this.stack[this.stack.length - 1];
    }
  
    getMin() {
      if (this.minStack.length === 0) {
        return null;
      }
      return this.minStack[this.minStack.length - 1];
    }
  }

  
  const minStack = new MinStack();
  minStack.push(5);
  minStack.push(2);
  minStack.push(8);
  minStack.push(1);
  minStack.pop();
  const topElement = minStack.top();  // Returns 8
  const minimumElement = minStack.getMin();  // Returns 2
  