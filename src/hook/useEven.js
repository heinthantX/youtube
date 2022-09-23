import React, { useState } from 'react';

export default function useEven({ startPoint }) {
  const [count, setCount] = useState(startPoint);

  const increaseEven = () => {
    setCount((prev) => (count % 2 === 0 ? count + 2 : count + 1));
  };

  const setEven = (val) => {
    setCount(val);
  };

  return [count, increaseEven, setEven];
}
