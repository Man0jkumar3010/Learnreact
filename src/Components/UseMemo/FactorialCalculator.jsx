import React, { useState, useMemo } from "react";
import "./FactorialCalculator.css"; 

const factorial = (num) => {
  console.log("Calculating factorial...");
  if (num < 0) return 0;
  if (num === 0) return 1;
  return num * factorial(num - 1);
};

export const FactorialCalculator = () => {
  const [number, setNumber] = useState(0);

  const factorialResult = useMemo(() => factorial(number), [number]);

  return (
    <div className="factorial-container">
      <h2>Factorial Calculator</h2>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value) || 0)}
        className="input"
      />
      <p>Factorial: {factorialResult}</p>
    </div>
  );
};
