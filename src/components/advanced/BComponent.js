import React, { useContext } from 'react'
import DComponent from './DComponent'
import { CountContext } from './ContextReducer'

function BComponent() {
    const context = useContext(CountContext)
    return (
        <div>
            Component B  Count: {context.count.count} <br />   
            <DComponent />
        </div>
    )
}

export default BComponent
