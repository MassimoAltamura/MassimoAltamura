import React, { useState, useEffect, useRef } from 'react';

function Counter({ initialValue }) {
    const [count, setCount] = useState(initialValue);
    const [direction, setDirection] = useState(null);
    const prevDirectionRef = useRef(null);

    useEffect(() => {
        if (prevDirectionRef.current !== direction) {
            prevDirectionRef.current = direction;
            console.log(`Direction changed: ${direction}`);
        }
    }, [direction]);

    const handleIncrement = () => {
        const newCount = count + 1;
        const newDirection = newCount > count ? 'up' : 'down';
        setDirection(newDirection);
        setCount(newCount);
    };

    const handleDecrement = () => {
        const newCount = count - 1;
        const newDirection = newCount > count ? 'up' : 'down';
        setDirection(newDirection);
        setCount(newCount);
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        const inputValue = parseInt(event.target.elements.valueInput.value);
        const diff = inputValue - count;
        const newDirection = diff > 0 ? 'up' : 'down';
        setDirection(newDirection);
        setCount(inputValue);
    };

    return (
        <form onSubmit={handleFormSubmit}>
            <p>Count: {count}</p>
            <button type="button" onClick={handleIncrement}>Increment</button>
            <button type="button" onClick={handleDecrement}>Decrement</button>
            <label htmlFor="valueInput">Enter value: </label>
            <input type="number" id="valueInput" />
            <button type="submit">Update</button>
        </form>
    );
}

export default Counter;
