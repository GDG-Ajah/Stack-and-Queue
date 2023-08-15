class Node<T> {
  value: T;
  next: Node<T> | null;

  constructor(value: T) {
    this.value = value;
    this.next = null;
  }
}

class Queue<T> {
  private head: Node<T> | null;
  private tail: Node<T> | null;
  private size: number;

  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  enqueue(value: T): void {
    const newNode = new Node<T>(value);

    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail!.next = newNode;
      this.tail = newNode;
    }

    this.size++;
  }

  dequeue(): T | null {
    if (this.isEmpty()) {
      return null;
    }

    const removedNode = this.head!;
    this.head = this.head!.next;
    removedNode.next = null;

    if (this.head === null) {
      this.tail = null;
    }

    this.size--;

    return removedNode.value;
  }

  peek(): T | null {
    if (this.isEmpty()) {
      return null;
    }

    return this.head!.value;
  }

  isEmpty(): boolean {
    return this.size === 0;
  }

  getSize(): number {
    return this.size;
  }

  printQueue(): void {
    let current = this.head;

    while (current !== null) {
      console.log(current.value);
      current = current.next;
    }
  }
}
