import React, { useReducer } from 'react'


const defaultState = {
    // multiple state variables, remember the spread
    firstCounter: 0,
    secondCounter:10
};
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const RESET = 'RESET';

const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case INCREMENT: {
            return { firstCounter: state.firstCounter + action.value };
        }
        case DECREMENT: {
            return { firstCounter: state.firstCounter - action.value };
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
            <div>Count : {count.firstCounter}</div>
            {/* multiple action properties */}
            <button onClick={() => dispatch({ type: INCREMENT, value: 1 })}>Increment</button>
            <button onClick={() => dispatch({ type: DECREMENT, value: 1 })}>Decrement</button>
            <button onClick={() => dispatch({ type: INCREMENT, value: 5 })}>Incr by 5</button>
            <button onClick={() => dispatch({ type: DECREMENT, value: 5 })}>Decr by 5</button>
            <button onClick={() => dispatch({ type: RESET })}>Reset</button>

        </div>
    )
}

export default ReduceCounter
