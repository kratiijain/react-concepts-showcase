import React, { useState, useMemo, useCallback } from "react";

const Child = React.memo(({ handleClick }) => {
  console.log("Child rendered");
  return <button onClick={handleClick}>Click Me</button>;
});

function ExpensiveComponent() {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(0);

  const expensiveCalculation = useMemo(() => {
    console.log("Calculating...");
    return number * 2;
  }, [number]);

  const handleClick = useCallback(() => {
    setCount((c) => c + 1);
  }, []);

  return (
    <div>
      <h2>Count: {count}</h2>
      <Child handleClick={handleClick} />
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(+e.target.value)}
        placeholder="Enter number"
      />
      <p>Double of number: {expensiveCalculation}</p>
    </div>
  );
}

export default ExpensiveComponent;
