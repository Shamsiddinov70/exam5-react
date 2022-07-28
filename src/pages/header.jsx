import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import Logo from "../assets/images/bobur-logo.svg"

function Header() {


    return (
        <>
            <div className='d-flex align-items-center header'>
                <ul className='d-none d-xl-block'>
                    <li>
                        <NavLink className='header-link' to='/all'>All</NavLink>
                        <NavLink className='header-link' to='/design'>Design Theory</NavLink>
                        <NavLink className='header-link' to='/ux'>UX</NavLink>
                        <NavLink className='header-link' to='/ui'>UI</NavLink>
                        <NavLink className='header-link' to='/typo'>Typography</NavLink>
                    </li>
                </ul>

                <button type="button" className="text-dark fs-1 btn d-xl-none ms-auto" aria-label="open" data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">&equiv;</button>
            </div>


            {/* offcanvas */}

            <div className="offcanvas w-100 offcanvas-end offcanvas-bg" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                <div className="offcanvas-header">
                    <Link to='/all'><img src={Logo} alt="site-logo" width={209} height={58} /></Link>

                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <li className='d-flex flex-column align-items-center text-center'>
                        <NavLink className='header-link mb-5 w-25' to='/all'>All</NavLink>
                        <NavLink className='header-link mb-5 w-25' to='/design'>Design Theory</NavLink>
                        <NavLink className='header-link mb-5 w-25' to='/ux'>UX</NavLink>
                        <NavLink className='header-link mb-5 w-25' to='/ui'>UI</NavLink>
                        <NavLink className='header-link mb-5 w-25' to='/typo'>Typography</NavLink>
                    </li>
                </div>
            </div>

            {/* offcanvas */}
        </>
    )
}

export default Header