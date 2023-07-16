class Node<T> {
  value: T;
  next: Node<T> | null;

  constructor(value: T) {
    this.value = value;
    this.next = null;
  }
}

class Stack<T> {
  private top: Node<T> | null;

  constructor() {
    this.top = null;
  }

  push(value: T): void {
    const newNode = new Node(value);
    newNode.next = this.top;
    this.top = newNode;
  }

  pop(): T | null {
    if (this.isEmpty()) {
      return null;
    }

    const value = this.top!.value;
    this.top = this.top!.next;
    return value;
  }

  peek(): T | null {
    return this.isEmpty() ? null : this.top!.value;
  }

  isEmpty(): boolean {
    return this.top === null;
  }

  clear(): void {
    this.top = null;
  }

  print(): void {
    let current = this.top;
    while (current !== null) {
      console.log(current.value);
      current = current.next;
    }
  }
}
