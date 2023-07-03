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


            