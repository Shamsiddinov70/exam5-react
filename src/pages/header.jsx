import React from 'react'
import { NavLink } from 'react-router-dom'


function Header() {

    // const handleFilterWord = (e) => {
    //     let searchWord = e.target.value;
    //     let newFilter = data.filter((value) => {
    //         return post.title.includes(searchWord);
    //     });
    // };

    return (
        <div className='d-flex align-items-center header'>
            <ul>
                <li>
                    <NavLink className='header-link' to='/all'>All</NavLink>
                    <NavLink className='header-link' to='/design'>Design Theory</NavLink>
                    <NavLink className='header-link' to='/ux'>UX</NavLink>
                    <NavLink className='header-link' to='/ui'>UI</NavLink>
                    <NavLink className='header-link' to='/typo'>Typography</NavLink>
                </li>
            </ul>

            {/* <form className='d-flex'>
                <input type={'search'} placeholder={'Search'} className='search-inp' />
                <li title='Search' className="search-icon" type='search'><img src={Search} alt="search-icon" width={16} height={16} /></li>
            </form> */}
        </div>
    )
}

export default Header