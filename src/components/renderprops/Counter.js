// @flow
import React, { Component } from 'react';

class Counter extends Component {

    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }

    handleEvent = () => {
        this.setState(prevState => {
            return {
                count: prevState.count + 1
            }
        })

    }
    render() {
        const { count } = this.state;
        return (
            <>
                {this.props.render(count, this.handleEvent)}
            </>
        )
    }
}

export default Counter
