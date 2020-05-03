import React, { Component } from 'react'
import ComponentD from './ComponentD'

class ComponentB extends Component {
    render() {
        return (
            <div>
                <ComponentD />
            </div>
        )
    }
}

export default ComponentB
