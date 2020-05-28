import React, { useReducer } from 'react';
import AComponent from './AComponent';
import BComponent from './BComponent';
import CCompnent from './CCompnent';

export const CountContext = React.createContext(0);
export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const RESET = 'RESET';

const initialState = {
    count: 0
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT:
            return { ...state, count: state.count + action.step };
        case DECREMENT:
            return { ...state, count: state.count - action.step };
        case RESET:
            return initialState;
        default:
            return state;
    }
}
function ContextReducer() {

    const [count, dispatch] = useReducer(reducer, initialState)

    return (
        <CountContext.Provider value={{ count, dispatch }}>
            <p>Top Level Count: {count.count}</p>
            <AComponent />
            <BComponent />
            <CCompnent />
        </CountContext.Provider>
    )
}

export default ContextReducer
