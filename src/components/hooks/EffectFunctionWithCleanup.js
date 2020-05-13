import React, { useState, useEffect } from 'react';
import { subscribeToFriendStatus, unsubscribeFromFriendStatus } from './ChatAPI';


function EffectFunctionWithCleanup() {

    const [isOnline, setIsOnline] = useState(null);

    handleStatusChange = (status) => {
        setIsOnline(status.isOnline);
    }

    useEffect(() => {
        subscribeToFriendStatus(props.friend.id, handleStatusChange);

        return unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);

        // return () => {
        //     ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
        // };
    });

    if (isOnline === null) {
        return 'Loading...';
    }
    return isOnline ? 'Online' : 'Offline';

}

export default EffectFunctionWithCleanup
