import React, { useState, useEffect } from 'react';
import { subscribeToFriendStatus, unsubscribeFromFriendStatus } from './ChatAPI';
import  useFriendStatus from './useFriendStatus';

function CustomHook(props) {

    let isOnline = useFriendStatus(props.friend.id);

    if (isOnline === null) {
        return 'Loading...';
    }
    return isOnline ? 'Online' : 'Offline';
}

export default CustomHook
