import React, { useContext } from 'react'
import EComponent from './EComponent'
import { CountContext } from './ContextReducer'

function CCompnent() {
    const context = useContext(CountContext)
    return (
        <div>
            Component C  Count: {context.count.count} <br />   
            <EComponent />
        </div>
    )
}

export default CCompnent
