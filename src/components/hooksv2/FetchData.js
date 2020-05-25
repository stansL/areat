import React, { useState, useEffect } from 'react';
import axios from 'axios';

function FetchData() {

    const [id, setId] = useState(1);


    const [post, setPost] = useState({});

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res => {
                console.log(res.data)
                setPost(res.data)
            })
            .catch(err => console.log(err))
        // return () => {
        //     cleanup
        // }
    }, [id])
    // });
    return (
        <div>
            <input type="number" value={id} onChange={e => setId(e.target.value)} /> <br />
            {/* <ul>
                {posts.map(post => (
                    <li key={post.id}> {post.title}</li>
                ))}
            </ul> */}

            {post.title}

        </div>
    )
}

export default FetchData
