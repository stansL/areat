import React, { useState, useEffect } from 'react';
import axios from 'axios';

function FetchData() {

    const [id, setId] = useState(1);
    const [fetchId, setFetchId] = useState(1);
    const [post, setPost] = useState({});
    const handleClick = () => {
        setFetchId(id);
    }

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${fetchId}`)
            .then(res => {
                setPost(res.data)
            })
            .catch(err => console.log(err))
        // return () => {
        //     cleanup
        // }
    }, [fetchId])
    // });
    return (
        <div>
            <input type="number" value={id} onChange={e => setId(e.target.value)} /> <br />
            <button type="button" onClick={handleClick}>Fetch Post</button>
            {/* <ul>
                {posts.map(post => (
                    <li key={post.id}> {post.title}</li>
                ))}
            </ul> */}

            <p>{post.title}</p>

        </div>
    )
}

export default FetchData
