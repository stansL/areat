import React, { Component } from 'react'

class ClassCounter extends Component {

    constructor(props) {
        super(props)

        this.state = {
            count: 0,
            name: ''
        }
    }

    componentDidMount() {
        document.title = `You clicked ${this.state.count} times`
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.count !== this.state.count) {
            console.log("Updating document title ");
            document.title = `You clicked ${this.state.count} times`
        }

    }
    incrementCounter = (e) => {
        this.setState(prevState => {
            return {
                count: prevState.count + 1
            }
        })
    }

    handleChange = (e) => {
        this.setState({
            name: e.target.value
        })
    }

    render() {
        return (
            <div>
                <input type="Text" value={this.state.name} onChange={this.handleChange} />
                <h1>You clicked {this.state.count} times {this.state.name} </h1>
                <button onClick={this.incrementCounter}>Click Me!</button>

            </div>
        )
    }
}

export default ClassCounter
