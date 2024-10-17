import React, { useEffect, useRef } from 'react';





const Channel = () => {
    const greetRef = useRef(null);  // useRef to store the greet function

    useEffect(() => {
        eval(`
            const greet = function(name) {
                return "Hello, " + name;
            };
            const add = function(a, b) {
                return a + b;
            };
            const multiply = function(a, b) {
                return a * b;
            };
            // Store the greet function in the ref
            greetRef.current = greet;
        `);
    }, []);  // The eval runs only once after the component mounts

    // Now you can use greetRef.current to access the greet function
    const handleGreet = () => {
        if (greetRef.current) {
            console.log(greetRef.current("John"));  // Calls the greet function
        }
    };

    return (
        <div>
            <button onClick={handleGreet}>Greet John</button>
        </div>
    );
};

export default Channel;


