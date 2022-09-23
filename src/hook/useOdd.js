import React, { useState } from 'react';

export default function useOdd({ startPoint }) {
  const [count, setCount] = useState(startPoint);

  const increaseOdd = () => {
    setCount((prev) => (count % 2 === 0 ? count + 1 : count + 2));
  };

  const setOdd = (val) => {
    setCount(val);
  };

  return [count, increaseOdd, setOdd];
}
