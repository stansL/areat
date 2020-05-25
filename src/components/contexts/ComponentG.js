import React, { useContext } from 'react'
import UserContext, { ChannelContext } from './userContext'

function ComponentG() {
    const user = useContext(UserContext);
    const channel = useContext(ChannelContext)
    return (
        <div>
            <h2>New Component</h2>  
            <div>Component G: {user}, from {channel}</div>       
        </div>
    )
}

export default ComponentG
