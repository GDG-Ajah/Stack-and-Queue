public class Node<T>
{
    public T Value { get; set; }
    public Node<T> Previous { get; set; }
    public Node<T> Next { get; set; }

    public Node(T value)
    {
        Value = value;
        Previous = null;
        Next = null;
    }
}

public class Deque<T>
{
    private Node<T> _head;
    private Node<T> _tail;
    private int _count;

    public Deque()
    {
        _head = null;
        _tail = null;
        _count = 0;
    }

    public int Count => _count;

    public void AddFront(T value)
    {
        Node<T> newNode = new Node<T>(value);

        if (_head == null)
        {
            _head = newNode;
            _tail = newNode;
        }
        else
        {
            newNode.Next = _head;
            _head.Previous = newNode;
            _head = newNode;
        }

        _count++;
    }

    public void AddBack(T value)
    {
        Node<T> newNode = new Node<T>(value);

        if (_tail == null)
        {
            _head = newNode;
            _tail = newNode;
        }
        else
        {
            newNode.Previous = _tail;
            _tail.Next = newNode;
            _tail = newNode;
        }

        _count++;
    }

    public T RemoveFront()
    {
        if (_head == null)
            throw new InvalidOperationException("Deque is empty.");

        T value = _head.Value;

        if (_head == _tail)
        {
            _head = null;
            _tail = null;
        }
        else
        {
            _head = _head.Next;
            _head.Previous = null;
        }

        _count--;
        return value;
    }

    public T RemoveBack()
    {
        if (_tail == null)
            throw new InvalidOperationException("Deque is empty.");

        T value = _tail.Value;

        if (_head == _tail)
        {
            _head = null;
            _tail = null;
        }
        else
        {
            _tail = _tail.Previous;
            _tail.Next = null;
        }

        _count--;
        return value;
    }

    public T PeekFront()
    {
        if (_head == null)
            throw new InvalidOperationException("Deque is empty.");

        return _head.Value;
    }

    public T PeekBack()
    {
        if (_tail == null)
            throw new InvalidOperationException("Deque is empty.");

        return _tail.Value;
    }

    public bool IsEmpty()
    {
        return _count == 0;
    }
}
