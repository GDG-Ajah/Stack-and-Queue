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