import React, { useState, useEffect } from 'react';

function Hooks() {

    const [count, setCount] = useState(0);
    // Declare multiple state variables
    const [age, setAge] = useState(32);
    const [fruit, setFruid] = useState('banana');
    const [todos, setTodos] = useState([{ text: 'Learn React Hooks' }]);

    //Similar to componentDidMount and componentDidUpdate
    useEffect(() => {
        document.title = `You clicked ${count} times`;
        
    })
    return (
        <div>
            <h1>Hooks things here</h1>
            <p>You clicked {count} times </p>
            <button onClick={() => setCount(count + 1)}>Click Me</button>
        </div>
    )
}

export default Hooks
