import React, { Component } from 'react'

class HoverCounter extends Component {
    render() {
        const { count, handleEvent } = this.props;
        return (
            <h2 onMouseOver={handleEvent}>Hovered {count} times</h2>
        )
    }
}

export default HoverCounter
