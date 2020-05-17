import React, { useState } from 'react'

function HookCounter() {

    const [count, setCount] = useState(0);

    // function incrementCounter() {
    //     setCount(count + 1);
    // }
    return (
        <div>
            <h1>You clicked {count} times</h1>
            <button onClick={() => setCount(count + 1)}>Click Me!</button>

        </div>
    )
}

export default HookCounter; 
