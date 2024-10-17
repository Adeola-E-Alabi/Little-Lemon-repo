import React, { useState, useEffect } from 'react';

const DynamicFunctionComponent = () => {
  const [greeting, setGreeting] = useState('');
  const [additionResult, setAdditionResult] = useState(null);
  const [multiplicationResult, setMultiplicationResult] = useState(null);

  useEffect(() => {
    const functionText = `
      const greet = function(name) {
        return "Hello, " + name;
      };

      const add = function(a, b) {
        return a + b;
      };

      const multiply = function(a, b) {
        return a * b;
      };
    `;

    // Evaluate the functions from the string
    eval(functionText);

    // Use the dynamically created functions
    setGreeting(greet("Alice"));            // Call greet function
    setAdditionResult(add(5, 3));           // Call add function
    setMultiplicationResult(multiply(4, 7)); // Call multiply function
  }, []);

  return (
    <div>
      <h1>Dynamic Function Usage</h1>
      <p>{greeting}</p>
      <p>Addition Result: {additionResult}</p>
      <p>Multiplication Result: {multiplicationResult}</p>
    </div>
  );
};

export default DynamicFunctionComponent;
