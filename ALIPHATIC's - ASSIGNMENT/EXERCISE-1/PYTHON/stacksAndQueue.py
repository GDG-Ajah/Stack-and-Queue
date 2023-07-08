#  1. Implement a Stack using an Array
#  2. Implement a Stack using a Linked List
#  3. Implement a Queue using an Array
#  4. Implement a Queue using a Linked List
#  5. Implement a Queue using a Doubly Linked List

# 1. Implement a Stack using an Array
class Stack:
    def __init__(self):
        self.stack = []
        self.top = -1

    def push(self, data):
        self.stack.append(data)
        self.top += 1

    def pop(self):
        if self.top == -1:
            return "Stack is Empty"
        else:
            self.top -= 1
            return self.stack.pop()

    def peek(self):
        if self.top == -1:
            return "Stack is Empty"
        else:
            return self.stack[self.top]

    def isEmpty(self):
        if self.top == -1:
            return True
        else:
            return False

    def printStack(self):
        if self.top == -1:
            print("Stack is Empty")
        else:
            for i in range(self.top, -1, -1):
                print(self.stack[i], end=" ")
            print()


            
# 2. Implement a Stack using a Linked List
class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

class StackLL:
    def __init__(self):
        self.top = None

    def push(self, data):
        newNode = Node(data)
        if self.top == None:
            self.top = newNode
        else:
            newNode.next = self.top
            self.top = newNode

    def pop(self):
        if self.top == None:
            return "Stack is Empty"
        else:
            temp = self.top
            self.top = self.top.next
            temp.next = None
            return temp.data

    def peek(self):
        if self.top == None:
            return "Stack is Empty"
        else:
            return self.top.data

    def isEmpty(self):
        if self.top == None:
            return True
        else:
            return False

    def printStack(self):
        if self.top == None:
            print("Stack is Empty")
        else:
            temp = self.top
            while temp != None:
                print(temp.data, end=" ")
                temp = temp.next
            print()



# 3. Implement a Queue using an Array
class Queue:
    def __init__(self):
        self.queue = []
        self.front = -1
        self.rear = -1

    def enqueue(self, data):
        if self.rear == -1:
            self.front += 1
            self.rear += 1
            self.queue.append(data)
        else:
            self.rear += 1
            self.queue.append(data)

    def dequeue(self):
        if self.front == -1:
            return "Queue is Empty"
        else:
            temp = self.queue[self.front]
            self.front += 1
            if self.front > self.rear:
                self.front = -1
                self.rear = -1
            return temp

    def peek(self):
        if self.front == -1:
            return "Queue is Empty"
        else:
            return self.queue[self.front]

    def isEmpty(self):
        if self.front == -1:
            return True
        else:
            return False

    def printQueue(self):
        if self.front == -1:
            print("Queue is Empty")
        else:
            for i in range(self.front, self.rear+1):
                print(self.queue[i], end=" ")
            print()



# 4. Implement a Queue using a Linked List
class QueueLL:
    def __init__(self):
        self.front = None
        self.rear = None

    def enqueue(self, data):
        newNode = Node(data)
        if self.rear == None:
            self.front = newNode
            self.rear = newNode
        else:
            self.rear.next = newNode
            self.rear = newNode

    def dequeue(self):
        if self.front == None:
            return "Queue is Empty"
        else:
            temp = self.front
            self.front = self.front.next
            temp.next = None
            if self.front == None:
                self.rear = None
            return temp.data

    def peek(self):
        if self.front == None:
            return "Queue is Empty"
        else:
            return self.front.data

    def isEmpty(self):
        if self.front == None:
            return True
        else:
            return False

    def printQueue(self):
        if self.front == None:
            print("Queue is Empty")
        else:
            temp = self.front
            while temp != None:
                print(temp.data, end=" ")
                temp = temp.next
            print()



# 5. Implement a Queue using a Doubly Linked List
class Node:
    def __init__(self, data):
        self.data = data
        self.next = None
        self.prev = None

class QueueDLL:
    def __init__(self):
        self.front = None
        self.rear = None

    def enqueue(self, data):
        newNode = Node(data)
        if self.rear == None:
            self.front = newNode
            self.rear = newNode
        else:
            self.rear.next = newNode
            newNode.prev = self.rear
            self.rear = newNode

    def dequeue(self):
        if self.front == None:
            return "Queue is Empty"
        else:
            temp = self.front
            self.front = self.front.next
            temp.next = None
            if self.front == None:
                self.rear = None
            else:
                self.front.prev = None
            return temp.data

    def peek(self):
        if self.front == None:
            return "Queue is Empty"
        else:
            return self.front.data

    def isEmpty(self):
        if self.front == None:
            return True
        else:
            return False

    def printQueue(self):
        if self.front == None:
            print("Queue is Empty")
        else:
            temp = self.front
            while temp != None:
                print(temp.data, end=" ")
                temp = temp.next
            print()
            