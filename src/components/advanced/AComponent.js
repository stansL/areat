import React, { useContext } from 'react'
import { CountContext, INCREMENT, DECREMENT, RESET } from './ContextReducer'

function AComponent() {

    const context = useContext(CountContext)
    return (
        <div>
                 Component A  Count: {context.count.count} <br />    
                 <button onClick = {() => context.dispatch({ type: INCREMENT, step: 1 })}>Increment</button>  
                 <button onClick = {() => context.dispatch({ type: DECREMENT, step: 1 })}>Decrement</button> 
                 <button onClick = {() => context.dispatch({ type: RESET, step: 1 })}>Reset</button> 
        </div>
    )
}

export default AComponent
