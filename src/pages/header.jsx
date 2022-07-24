import React from 'react'
import { NavLink } from 'react-router-dom'
import Search from "../assets/images/search.svg"

function Header() {
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

            <form className='d-flex'>
                <input type={'search'} placeholder={'Search'} className='search-inp' />
                <button title='Search' className="search-icon" type='search'><img src={Search} alt="search-icon" width={16} height={16} /></button>
            </form>
        </div>
    )
}

export default Header