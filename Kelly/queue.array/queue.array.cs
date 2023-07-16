public class Queue<T>
{
    private T[] array;
    private int front;  // Index of the front element
    private int rear;   // Index of the rear element
    private int size;   // Current size of the queue

    public Queue(int capacity)
    {
        array = new T[capacity];
        front = 0;
        rear = -1;
        size = 0;
    }

    public int Count => size;

    public void Enqueue(T item)
    {
        if (size == array.Length)
        {
            // Queue is full, resize the array to accommodate new elements
            ResizeArray(array.Length * 2);
        }

        rear = (rear + 1) % array.Length;
        array[rear] = item;
        size++;
    }

    public T Dequeue()
    {
        if (size == 0)
        {
            throw new InvalidOperationException("Queue is empty");
        }

        T item = array[front];
        array[front] = default;  // Clear the dequeued element

        front = (front + 1) % array.Length;
        size--;

        if (size > 0 && size == array.Length / 4)
        {
            // Queue is less than 25% full, resize the array to conserve memory
            ResizeArray(array.Length / 2);
        }

        return item;
    }

    public T Peek()
    {
        if (size == 0)
        {
            throw new InvalidOperationException("Queue is empty");
        }

        return array[front];
    }

    public bool IsEmpty()
    {
        return size == 0;
    }

    private void ResizeArray(int newCapacity)
    {
        T[] newArray = new T[newCapacity];

        for (int i = 0; i < size; i++)
        {
            newArray[i] = array[(front + i) % array.Length];
        }

        array = newArray;
        front = 0;
        rear = size - 1;
    }
}
