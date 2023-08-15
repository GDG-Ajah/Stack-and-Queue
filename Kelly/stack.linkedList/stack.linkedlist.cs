public class Node<T>
{
    public T Data { get; set; }
    public Node<T> Next { get; set; }

    public Node(T data)
    {
        Data = data;
        Next = null;
    }
}

public class Stack<T>
{
    private Node<T> top;
    private int count;

    public Stack()
    {
        top = null;
        count = 0;
    }

    public int Count
    {
        get { return count; }
    }

    public void Push(T item)
    {
        Node<T> newNode = new Node<T>(item);
        newNode.Next = top;
        top = newNode;
        count++;
    }

    public T Pop()
    {
        if (IsEmpty())
        {
            throw new InvalidOperationException("Stack is empty.");
        }

        T item = top.Data;
        top = top.Next;
        count--;
        return item;
    }

    public T Peek()
    {
        if (IsEmpty())
        {
            throw new InvalidOperationException("Stack is empty.");
        }

        return top.Data;
    }

    public bool IsEmpty()
    {
        return count == 0;
    }

    public void Clear()
    {
        top = null;
        count = 0;
    }
}
