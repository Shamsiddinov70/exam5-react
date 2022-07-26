import React, { useEffect, useState } from 'react'
import Developers from "../assets/images/developers.jpg"
import Clock from "../assets/images/clock.svg"
import { Link } from "react-router-dom"

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

                {posts.map(post => (
                    <li className='list-unstyled'>
                        <p className='comment-subtitle'>User interface</p>
                        <h2 className='title-comment mb-3' key={post.id}>{post.title}</h2>
                        <div className='mb-4'>
                            <span className='me-auto span-date'>September 24.2020</span>
                            <span className='reading-time'>3 minutes read</span>
                        </div>
                        <img className='mb-4' src={Developers} alt='team img' width={400} height={736} />

                        <p className='comment' key={post.id}>{post.body}</p>

                        <div>
                            <h3 className='mb-4'>
                                More like this
                            </h3>
                            <div className='post-title-wrapper border-bottom mb-5'>
                                <div className='d-flex spans'>
                                    <span className='me-auto span-date'>September 24.2020</span>
                                    <span className='span-subtitle'>Design theory</span>
                                </div>
                                <li className='list-unstyled mb-3'>
                                    <Link className='title' to="/comment" key={post.id}>{post.title}</Link>
                                </li>

                                <div className='d-flex align-items-center mb-3'>
                                    <img src={Clock} alt="clock" width={17.5} height={17.5} />
                                    <span className='reading-time'>3 minutes read</span>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className='post-title-wrapper border-bottom mb-5'>
                                <div className='d-flex spans'>
                                    <span className='me-auto span-date'>September 24.2020</span>
                                    <span className='span-subtitle'>Design theory</span>
                                </div>
                                <li className='list-unstyled mb-3'>
                                    <Link className='title' to="/comment" key={post.id}>{post.title}</Link>
                                </li>

                                <div className='d-flex align-items-center mb-3'>
                                    <img src={Clock} alt="clock" width={17.5} height={17.5} />
                                    <span className='reading-time'>3 minutes read</span>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className='post-title-wrapper border-bottom mb-5'>
                                <div className='d-flex spans'>
                                    <span className='me-auto span-date'>September 24.2020</span>
                                    <span className='span-subtitle'>Design theory</span>
                                </div>
                                <li className='list-unstyled mb-3'>
                                    <Link className='title' to="/comment" key={post.id}>{post.title}</Link>
                                </li>

                                <div className='d-flex align-items-center mb-3'>
                                    <img src={Clock} alt="clock" width={17.5} height={17.5} />
                                    <span className='reading-time'>3 minutes read</span>
                                </div>
                            </div>
                        </div>
                    </li>
                ))}
            </div>
        </div>
    )
}

export default Comment