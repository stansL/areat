import React, { useContext } from 'react'
import FComponent from './FComponent'
import { CountContext } from './ContextReducer'

function EComponent() {
    const context = useContext(CountContext)
    return (
        <div>
            Component E  Count: {context.count.count} <br />   
            <FComponent />
        </div>
    )
}

export default EComponent
