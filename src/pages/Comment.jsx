import React, { useEffect, useState } from 'react'
import Developers from "../assets/images/developers.jpg"

function Comment() {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        (async function () {
            const res = await fetch('https://jsonplaceholder.typicode.com/posts')
            console.log(res);

            if (!res.ok) {
                throw new Error(JSON.stringify(res));
            }

            const data = await res.json();
            setPosts(data)
            console.log(data);
        })()
    }, [])
    return (
        <div>
            <div className="body">
                <img src={Developers} alt='team img' width={400} height={736} />
                {posts.map(post => (
                    <li className='list-unstyled'>
                        <p key={post.id}>{post.body}</p>
                    </li>
                ))}
            </div>
        </div>
    )
}

export default Comment