import React, { useReducer } from 'react'


const defaultState = 0;
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const RESET = 'RESET';

const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case INCREMENT: {
            return state + 1;
        }
        case DECREMENT: {
            return state - 1;
        }
        case RESET: {
            return defaultState;
        }
        default: {
            return state;
        }
    }

}
function ReduceCounter() {
    const [count, dispatch] = useReducer(reducer, defaultState)
    return (
        <div>
            <div>Count : {count}</div>
            <button onClick={() => dispatch({ type: INCREMENT })}>Increment</button>
            <button onClick={() => dispatch({ type: DECREMENT })}>Decrement</button>
            <button onClick={() => dispatch({ type: RESET })}>Reset</button>
        </div>
    )
}

export default ReduceCounter
