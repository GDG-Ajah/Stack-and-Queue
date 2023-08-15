public class Queue<T>
{
    private class Node
    {
        public T Value { get; }
        public Node Next { get; set; }

        public Node(T value)
        {
            Value = value;
        }
    }

    private Node _head;
    private Node _tail;
    private int _count;

    public int Count => _count;
    public bool IsEmpty => _count == 0;

    public void Enqueue(T item)
    {
        Node newNode = new Node(item);

        if (IsEmpty)
        {
            _head = newNode;
            _tail = newNode;
        }
        else
        {
            _tail.Next = newNode;
            _tail = newNode;
        }

        _count++;
    }

    public T Dequeue()
    {
        if (IsEmpty)
        {
            throw new InvalidOperationException("Queue is empty.");
        }

        T value = _head.Value;
        _head = _head.Next;
        _count--;

        if (IsEmpty)
        {
            _tail = null;
        }

        return value;
    }

    public T Peek()
    {
        if (IsEmpty)
        {
            throw new InvalidOperationException("Queue is empty.");
        }

        return _head.Value;
    }

    public void Clear()
    {
        _head = null;
        _tail = null;
        _count = 0;
    }
}
