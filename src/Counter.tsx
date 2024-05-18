interface ICounter {
    count: number
    setCount: (count: number) => void
}

export default function Counter({count, setCount}: Readonly<ICounter>) {
  return (
    <div className="Counter">
      <button onClick={() => setCount(count+1)}>INCREMENT COUNT {count}</button>
    </div>
  );
}
