import React, { useEffect, useState } from 'react'
import Clock from "../assets/images/clock.svg"
import { Link } from "react-router-dom"
import ReactPaginate from 'react-paginate';
import Search from "../assets/images/search.svg"

function All() {

    const [searchTerm, setSearchTerm] = useState('');

    const [posts, setPosts] = useState([]);
    const [pageCount, setPageCount] = useState(0);

    let limit = 10;

    useEffect(() => {
        (async function () {
            const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_page=1&_limit=${limit}`)
            console.log(res);

            if (!res.ok) {
                throw new Error(JSON.stringify(res));
            }

            const data = await res.json();
            const total = res.headers.get('x-total-count')
            setPageCount(Math.ceil(total / limit))
            setPosts(data)
        })()
    }, [limit])

    console.log(posts);

    const fetchComments = async (currentPage) => {
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_page=${currentPage}&_limit=${limit}`)

        const data = await res.json();
        return data;
    }

    const handlePageClick = async (data) => {
        console.log(data.selected);

        let currentPage = data.selected + 1;

        const commentsFormServer = await fetchComments(currentPage);

        setPosts(commentsFormServer)
    }

    return (
        <div className='posts'>

            <form className='d-block d-flex search-form justify-content-end '>
                <input type={'search'} placeholder={'Search'} className='search-inp' onChange={event => { setSearchTerm(event.target.value) }} />

                <li title='Search' className="search-icon" type='search'><img src={Search} alt="search-icon" width={16} height={16} /></li>
            </form>

            <div class="posts-header">
                <h1 className='heading'>Recent Posts</h1>
                {posts.filter((val) => {
                    if (searchTerm === '') {
                        return val
                    }

                    else if (val.title.toLowerCase().includes(searchTerm.toLowerCase())) {
                        return val
                    }

                    return false

                }).map(post => (
                    <div className='post-title-wrapper border-bottom mb-5'>
                        <div className='d-flex spans'>
                            <span className='me-auto span-date'>September 24.2020</span>
                            <span className='span-subtitle'>Design theory</span>
                        </div>
                        <li className='list-unstyled mb-3' key={post.id}>
                            <Link className='title' to={`/post/${post.id}`}>{post.title}</Link>
                        </li>

                        <div className='d-flex align-items-center mb-3'>
                            <img src={Clock} alt="clock" width={17.5} height={17.5} />
                            <span className='reading-time'>3 minutes read</span>
                        </div>
                    </div>
                ))}
            </div>
            <div>
                <ReactPaginate
                    previousLabel={'<'}
                    nextLabel={'>'}
                    breakLabel={'...'}
                    pageCount={pageCount}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={3}
                    onPageChange={handlePageClick}
                    containerClassName={'pagination'}
                    pageClassName={'page-item'}
                    pageLinkClassName={'page-link'}
                    previousClassName={'page-item'}
                    previousLinkClassName={'page-link'}
                    nextClassName={'page-item'}
                    nextLinkClassName={'page-link'}
                    breakClassName={'page-item'}
                    breakLinkClassName={'page-link'}
                    activeClassName={'active'}
                />
            </div>
        </div >
    )
}

export default All