public class Stack<T>
{
    private T[] array;
    private int top;

    public Stack(int capacity)
    {
        array = new T[capacity];
        top = -1;
    }

    public void Push(T item)
    {
        if (top == array.Length - 1)
        {
            throw new StackOverflowException("Stack is full");
        }

        top++;
        array[top] = item;
    }

    public T Pop()
    {
        if (IsEmpty())
        {
            throw new InvalidOperationException("Stack is empty");
        }

        T item = array[top];
        top--;
        return item;
    }

    public T Peek()
    {
        if (IsEmpty())
        {
            throw new InvalidOperationException("Stack is empty");
        }

        return array[top];
    }

    public bool IsEmpty()
    {
        return top == -1;
    }

    public int Count()
    {
        return top + 1;
    }

    public void Clear()
    {
        top = -1;
    }
}
