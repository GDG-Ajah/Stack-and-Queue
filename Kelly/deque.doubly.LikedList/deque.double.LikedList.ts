class ListNode<T> {
  value: T;
  next: ListNode<T> | null;
  prev: ListNode<T> | null;

  constructor(value: T) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class Deque<T> {
  private head: ListNode<T> | null;
  private tail: ListNode<T> | null;
  private size: number;

  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  isEmpty(): boolean {
    return this.size === 0;
  }

  getSize(): number {
    return this.size;
  }

  addFront(value: T): void {
    const newNode = new ListNode(value);

    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head!.prev = newNode;
      this.head = newNode;
    }

    this.size++;
  }

  addRear(value: T): void {
    const newNode = new ListNode(value);

    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.prev = this.tail;
      this.tail!.next = newNode;
      this.tail = newNode;
    }

    this.size++;
  }

  removeFront(): T | null {
    if (this.isEmpty()) {
      return null;
    }

    const value = this.head!.value;

    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head!.next;
      this.head!.prev = null;
    }

    this.size--;
    return value;
  }

  removeRear(): T | null {
    if (this.isEmpty()) {
      return null;
    }

    const value = this.tail!.value;

    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.tail!.prev;
      this.tail!.next = null;
    }

    this.size--;
    return value;
  }

  peekFront(): T | null {
    return this.isEmpty() ? null : this.head!.value;
  }

  peekRear(): T | null {
    return this.isEmpty() ? null : this.tail!.value;
  }
}
