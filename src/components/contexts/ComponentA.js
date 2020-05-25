import React, { Component } from 'react'
import { UserConsumer } from './userContext'

class ComponentA extends Component {
    render() {
        return (
            <UserConsumer>
                {(username) => <div> Component A: {username}</div>}
            </UserConsumer>
        )
    }
}

export default ComponentA
