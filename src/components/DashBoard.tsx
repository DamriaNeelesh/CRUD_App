import React, { useState, useEffect } from 'react'
import { PostCard } from './PostCard';

export default function DashBoard() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(async (res) => {
                const post = await res.json();
                setPosts(post);
            })
            .catch(err => {
                console.log(err.message)
            });
    });

    return (
        <div className='dashboard'>
            {
                posts.map(item => {
                    return <PostCard userId={item['userId']} title={item['title']} body={item['body']} id={item['id']} />;
                })
            }
        </div>
    )
}
