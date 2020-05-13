import React, { Component } from 'react';
import { subscribeToFriendStatus, unsubscribeFromFriendStatus } from './ChatAPI';

class EffectClassWithCleanup extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isOnline: null
        }
    }

    handleStatusChange = (status) => {
        this.setState({
            isOnline: status.isOnline
        });
    }
    componentDidMount() {
        subscribeToFriendStatus(this.props.friend.id, this.handleStatusChange);
    }

    componentDidUpdate(prevProps, prevState) {
        // if (prevState.friend.id !== this.state.friend.id) {
        subscribeToFriendStatus(this.props.friend.id, this.handleStatusChange);
        // }
    }

    componentWillUnmount() {
        unsubscribeFromFriendStatus(this.props.friend.id, this.handleStatusChange)
    }

    render() {
        if (this.state.isOnline === null) {
            return 'Loading...';
        }
        return this.state.isOnline ? 'Online' : 'Offline';
    }
}

export default EffectClassWithCleanup
