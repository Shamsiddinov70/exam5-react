import React from 'react'
import { Link } from 'react-router-dom'
import Logo from "../assets/images/bobur-logo.svg"
import Facebook from "../assets/images/side-facebook.svg"
import Github from "../assets/images/side-github.svg"
import Twitter from "../assets/images/side-twitter.svg"
import Linkedin from "../assets/images/side-linkedin.svg"


function Side() {
    return (
        <>
            <aside className='aside'>
                <Link to='/all'><img src={Logo} alt="site-logo" className="aside-logo site-logo" width={209} height={58} /></Link>
                <h6 className='aside-title'>
                    What I do!
                </h6>
                <p className='aside-text'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer aliquet, orci in bibendum luctus, turpis ante pretium velit, eu rutrum augue erat ac eros. Cras ultricies mattis convallis.
                </p>
                <p className='header-subtext'>
                    EXPLORE ME
                </p>
                <ul className='side-icons d-flex'>
                    <li>
                        <Link to='/not'><img src={Facebook} alt="side-icon" className="aside-icon" width={10} height={18} /></Link>
                    </li>
                    <li>
                        <Link to='/not'><img src={Github} alt="side-icon" className="aside-icon" width={20} height={19} /></Link>
                    </li>
                    <li>
                        <Link to='/not'><img src={Twitter} alt="side-icon" className="aside-icon" width={20} height={17} /></Link>
                    </li>
                    <li>
                        <Link to='/not'><img src={Linkedin} alt="side-icon" className="aside-icon" width={17} height={17} /></Link>
                    </li>
                </ul>
            </aside>
        </>
    )
}

export default Side