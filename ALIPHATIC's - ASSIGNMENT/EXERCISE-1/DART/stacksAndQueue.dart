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


// 2. Implement a Stack using a Linked List
class Node {
  int data;
  Node next;

  Node(this.data);
}

class StackUsingLinkedList {
  Node _top;

  void push(int data) {
    Node newNode = Node(data);
    newNode.next = _top;
    _top = newNode;
  }

  int pop() {
    if (_top == null) {
      print('Stack is empty');
      return -1;
    }
    int data = _top.data;
    _top = _top.next;
    return data;
  }

  int peek() {
    if (_top == null) {
      print('Stack is empty');
      return -1;
    }
    return _top.data;
  }

  bool isEmpty() {
    return _top == null;
  }

  void printStack() {
    if (_top == null) {
      print('Stack is empty');
      return;
    }
    print('Stack: ');
    Node temp = _top;
    while (temp != null) {
      print(temp.data);
      temp = temp.next;
    }
  }
}


// 3. Implement a Queue using an Array
class Queue {
  List _queue = [];
  int _front = -1;
  int _rear = -1;

  void enqueue(int data) {
    if (_front == -1) {
      _front++;
    }
    _rear++;
    _queue.add(data);
  }

  int dequeue() {
    if (_front == -1) {
      print('Queue is empty');
      return -1;
    }
    int data = _queue[_front];
    _queue.removeAt(_front);
    _rear--;
    if (_rear == -1) {
      _front = -1;
    }
    return data;
  }

  int peek() {
    if (_front == -1) {
      print('Queue is empty');
      return -1;
    }
    return _queue[_front];
  }

  bool isEmpty() {
    return _front == -1;
  }

  void printQueue() {
    if (_front == -1) {
      print('Queue is empty');
      return;
    }
    print('Queue: ');
    for (int i = _front; i <= _rear; i++) {
      print(_queue[i]);
    }
  }
}


// 4. Implement a Queue using a Linked List
class QueueUsingLinkedList {
  Node _front;
  Node _rear;

  void enqueue(int data) {
    Node newNode = Node(data);
    if (_front == null) {
      _front = newNode;
      _rear = newNode;
      return;
    }
    _rear.next = newNode;
    _rear = newNode;
  }

  int dequeue() {
    if (_front == null) {
      print('Queue is empty');
      return -1;
    }
    int data = _front.data;
    _front = _front.next;
    if (_front == null) {
      _rear = null;
    }
    return data;
  }

  int peek() {
    if (_front == null) {
      print('Queue is empty');
      return -1;
    }
    return _front.data;
  }

  bool isEmpty() {
    return _front == null;
  }

  void printQueue() {
    if (_front == null) {
      print('Queue is empty');
      return;
    }
    print('Queue: ');
    Node temp = _front;
    while (temp != null) {
      print(temp.data);
      temp = temp.next;
    }
  }
}


// 5. Implement a Queue using a Doubly Linked List
class Node1 {
  int data;
  Node1 next;
  Node1 prev;

  Node1(this.data);
}

class QueueUsingDoublyLinkedList {
  Node1 _front;
  Node1 _rear;

  void enqueue(int data) {
    Node1 newNode = Node1(data);
    if (_front == null) {
      _front = newNode;
      _rear = newNode;
      return;
    }
    _rear.next = newNode;
    newNode.prev = _rear;
    _rear = newNode;
  }

  int dequeue() {
    if (_front == null) {
      print('Queue is empty');
      return -1;
    }
    int data = _front.data;
    _front = _front.next;
    if (_front == null) {
      _rear = null;
    }
    return data;
  }

  int peek() {
    if (_front == null) {
      print('Queue is empty');
      return -1;
    }
    return _front.data;
  }

  bool isEmpty() {
    return _front == null;
  }

  void printQueue() {
    if (_front == null) {
      print('Queue is empty');
      return;
    }
    print('Queue: ');
    Node1 temp = _front;
    while (temp != null) {
      print(temp.data);
      temp = temp.next;
    }
  }
}