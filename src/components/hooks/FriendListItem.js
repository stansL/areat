import React, { useState, useEffect } from 'react';
import { subscribeToFriendStatus, unsubscribeFromFriendStatus } from './ChatAPI';

function FriendListItem(props) {
    let isOnline = useFriendStatus(props.friend.id);

    return (
        <li style={{ color: isOnline ? 'green' : 'black' }}>
            {props.friend.name}
        </li>
    );
}