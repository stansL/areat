import React, { Component } from 'react'

class ClickCounter extends Component {

        render() {
        const {count,handleEvent} = this.props;
        return (
            <button onClick={handleEvent}>Clicked {count} times</button>
        )
    }
}

export default ClickCounter
