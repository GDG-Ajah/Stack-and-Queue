// Min Stack

// Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

// Implement the MinStack class:

// MinStack() initializes the stack object.
// void push(int val) pushes the element val onto the stack.
// void pop() removes the element on the top of the stack.
// int top() gets the top element of the stack.
// int getMin() retrieves the minimum element in the stack.
// You must implement a solution with O(1) time complexity for each function.

 

// Example 1:

// Input
// ["MinStack","push","push","push","getMin","pop","top","getMin"]
// [[],[-2],[0],[-3],[],[],[],[]]

// Output
// [null,null,null,null,-3,null,0,-2]

// Explanation
// MinStack minStack = new MinStack();
// minStack.push(-2);
// minStack.push(0);
// minStack.push(-3);
// minStack.getMin(); // return -3
// minStack.pop();
// minStack.top();    // return 0
// minStack.getMin(); // return -2
 

// Constraints:

// -231 <= val <= 231 - 1
// Methods pop, top and getMin operations will always be called on non-empty stacks.
// At most 3 * 104 calls will be made to push, pop, top, and getMin.
// Hint #1  
// Consider each node in the stack having a minimum value. 


class MinStack {
  List<int> stack;
  List<int> minStack;

  MinStack() {
    stack = [];
    minStack = [];
  }

  void push(int val) {
    stack.add(val);
    if (minStack.isEmpty || val <= minStack.last) {
      minStack.add(val);
    }
  }

  void pop() {
    if (stack.isNotEmpty) {
      int poppedElement = stack.removeLast();
      if (poppedElement == minStack.last) {
        minStack.removeLast();
      }
    }
  }

  int top() {
    if (stack.isNotEmpty) {
      return stack.last;
    }
    return null;
  }

  int getMin() {
    if (minStack.isNotEmpty) {
      return minStack.last;
    }
    return null;
  }
}


MinStack minStack = MinStack();
minStack.push(5);
minStack.push(2);
minStack.push(8);
minStack.push(1);
minStack.pop();
int topElement = minStack.top();  // Returns 8
int minimumElement = minStack.getMin();  // Returns 2
