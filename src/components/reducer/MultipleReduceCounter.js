import React, { useReducer } from 'react'


const defaultState = {
    firstCounter: 0
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
function MultipleReduceCounter() {
    ;
    const [count, dispatch] = useReducer(reducer, defaultState)
    const [countTwo, dispatchTwo] = useReducer(reducer, defaultState)
    return (
        <>
            <div>
                <div>Count : {count.firstCounter}</div>
                {/* multiple action properties */}
                <button onClick={() => dispatch({ type: INCREMENT, value: 1 })}>Increment</button>
                <button onClick={() => dispatch({ type: DECREMENT, value: 1 })}>Decrement</button>
                <button onClick={() => dispatch({ type: RESET })}>Reset</button>

            </div>

            <div>
                <div>Count Two : {countTwo.firstCounter}</div>
                {/* multiple action properties */}
                <button onClick={() => dispatchTwo({ type: INCREMENT, value: 1 })}>Increment</button>
                <button onClick={() => dispatchTwo({ type: DECREMENT, value: 1 })}>Decrement</button>
                <button onClick={() => dispatchTwo({ type: RESET })}>Reset</button>

            </div>
        </>
    )
}

export default MultipleReduceCounter
