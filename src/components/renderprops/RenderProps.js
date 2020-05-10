import React, { Component } from 'react'
import ClickCounter from './ClickCounter'
import HoverCounter from './HoverCounter'
import User from './User'
import Counter from './Counter'

class RenderProps extends Component {
    render() {
        return (
            <>
                {/* <HoverCounter />
                <ClickCounter />
                <User render = {(isLoggedIn) => isLoggedIn ? "Stanslaus" : "Guest"} /> */}
                <Counter render={(count, handleEvent) => <HoverCounter count={count} handleEvent={handleEvent} />} />
                <Counter render={(count, handleEvent) => <ClickCounter count={count} handleEvent={handleEvent} />} />
            </>
        )
    }
}

export default RenderProps
