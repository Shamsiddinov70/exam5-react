import React, { useEffect, useState } from 'react'
import Clock from "../assets/images/clock.svg"
import { Link } from "react-router-dom"
// import Comment from './Comment';
// import Developers from "../assets/images/developers.jpg"

function All() {
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
        })()
    }, [])
    // console.log(posts);

    return (
        <div className='posts'>
            <div class="posts-header">
                <h1 className='heading'>Recent Posts</h1>
                {posts.map(post => (
                    <div className='post-title-wrapper border-bottom mb-5'>
                        <div className='d-flex spans'>
                            <span className='me-auto span-date'>September 24.2020</span>
                            <span className='span-subtitle'>Design theory</span>
                        </div>
                        <li className='list-unstyled mb-3'>
                            <Link className='title' to="/comment" key={post.id}>{post.title}</Link>
                            {/* <Comment /> */}
                            {/* <Link className='' to="/" key={post.userid}>{post.body}</Link> */}
                        </li>

                        <div className='d-flex align-items-center mb-3'>
                            <img src={Clock} alt="clock" width={17.5} height={17.5} />
                            <span className='reading-time'>3 minutes read</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default All