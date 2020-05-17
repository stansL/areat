import React, { Component } from 'react'

class ClassCounter extends Component {

    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }
    incrementCounter = (e) => {
        this.setState(prevState => {
            return {
                count: prevState.count + 1
            }
        })
    }

    render() {
        return (
            <div>
                <h1>You clicked {this.state.count} times</h1>
                <button onClick={this.incrementCounter}>Click Me!</button>

            </div>
        )
    }
}

export default ClassCounter
