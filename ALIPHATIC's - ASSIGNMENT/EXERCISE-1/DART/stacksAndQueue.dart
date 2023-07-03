//  1. Implement a Stack using an Array
//  2. Implement a Stack using a Linked List
//  3. Implement a Queue using an Array
//  4. Implement a Queue using a Linked List
//  5. Implement a Queue using a Doubly Linked List

// 1. Implement a Stack using an Array
class Stack {
  List _stack = [];
  int _top = -1;

  void push(int data) {
    _stack.add(data);
    _top++;
  }

  int pop() {
    if (_top == -1) {
      print('Stack is empty');
      return -1;
    }
    int data = _stack[_top];
    _stack.removeAt(_top);
    _top--;
    return data;
  }

  int peek() {
    if (_top == -1) {
      print('Stack is empty');
      return -1;
    }
    return _stack[_top];
  }

  bool isEmpty() {
    return _top == -1;
  }

  void printStack() {
    if (_top == -1) {
      print('Stack is empty');
      return;
    }
    print('Stack: ');
    for (int i = _top; i >= 0; i--) {
      print(_stack[i]);
    }
  }
}