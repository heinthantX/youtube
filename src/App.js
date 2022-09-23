import logo from './logo.svg';
import './App.css';
import Home from './Component/Home';
import { useEffect, useState } from 'react';
import useOdd from './hook/useOdd';
import useEven from './hook/useEven';

function App() {
  const [count, setCount] = useState(0);
  const [odd, oddIncrease, setOdd] = useOdd({ startPoint: count });
  const [even, evenIncrease, setEven] = useEven({ startPoint: count });

  useEffect(() => {
    setCount(odd);
    setEven(odd);
  }, [odd]);

  useEffect(() => {
    setCount(even);
    setOdd(even);
  }, [even]);

  return (
    <div className="flex flex-col h-full justify-center items-center">
      <h1 className="text-6xl font-bold">oddCount : {count}</h1>
      <button onClick={oddIncrease}>Odd Increase</button> |
      <button onClick={evenIncrease}>Even Increase</button>
    </div>
  );
}

export default App;
