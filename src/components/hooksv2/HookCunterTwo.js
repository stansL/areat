import React, { useState } from 'react'

function HookCunterTwo() {
    const initialState = 0;
    const [count, setCount] = useState(initialState);

    const incrementFive = () => {
        for (let i = 0; i < 5; i++) {
            setCount(prevCount => prevCount + 1);
        }
    }

    return (
        <div>
            Count: {count} <br />
            <button onClick={() => setCount(prevCount => prevCount + 1)}>Inc.</button>
            <button onClick={() => setCount(prevCount => prevCount - 1)}>Dec.</button>
            <button onClick={() => setCount(initialState)}>Reset</button>
            <button onClick={incrementFive}>Inc 5</button>

        </div>
    )
}

export default HookCunterTwo
