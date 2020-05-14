import React from 'react';
import { subscribeToFriendStatus, unsubscribeFromFriendStatus } from './ChatAPI';

function useFriendStatus(friendId) {
    const [isOnline, setIsOnline] = useState(null);
    useEffect(() => {
        function handleStatusChange(status) {
            setIsOnline(status.isOnline);
        }
        subscribeToFriendStatus(props.friend.id, handleStatusChange);
        return () => {
            unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
        };
    });
    return isOnline;
}

export default useFriendStatus
