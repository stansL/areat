import React, { useState, useEffect } from 'react'

function HookCounter() {

    const [count, setCount] = useState(0);
    const [name, setName] = useState("");
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    // function incrementCounter() {
    //     setCount(count + 1);
    // }

    useEffect(() => {
        console.log("Updating document title ");
        document.title = `Items: ${count}`;
    }, [count]);

    const logMousePosition = (e) => {
        setX(e.clientX);
        setY(e.clientY);
    }

    useEffect(() => {
        console.log("Use Effect called");
        window.addEventListener('mousemove', logMousePosition);
    }, []);



    const handleChange = (e) => {
        setName(e.target.value)
    }
    return (
        <div>
            <input type="Text" value={name} onChange={handleChange} />
            <h1>You clicked {count} times</h1>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>Click Me!</button>

            <br />
            Hooks X - {x}, Y - {y}

        </div>
    )
}

export default HookCounter; 
