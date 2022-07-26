import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from "../assets/images/bobur-logo.svg"
import Facebook from "../assets/images/side-facebook.svg"
import Github from "../assets/images/side-github.svg"
import Twitter from "../assets/images/side-twitter.svg"
import Linkedin from "../assets/images/side-linkedin.svg"
import Clap from "../assets/images/clap.svg"
import Share from "../assets/images/share.svg"



function Side() {

    const [count, seetCount] = useState(175)

    const handleCounter = () => {
        // console.log('count');
        seetCount(count + 1);
    }

    return (
        <>
            <div className='aside'>
                <Link to='/all'><img src={Logo} alt="site-logo" className="aside-logo site-logo" width={209} height={58} /></Link>

                <div className='aside-comment'>
                    <div className='d-flex flex-column align-items-center mb-5'>
                        <button onClick={handleCounter} className='btn mb-1'><img src={Clap} alt='clap-icon' width={18} height={19} />
                        </button>
                        <span>{count}</span>
                    </div>
                    <div className='d-flex flex-column align-items-center'>
                        <img className='mb-2' src={Share} alt='share-icon' width={18} height={19} />
                        <span>70</span>
                    </div>
                </div>

                <div className='aside-main'>
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
                </div>
            </div>

        </>
    )
}

export default Side