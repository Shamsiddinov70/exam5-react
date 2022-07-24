import React from 'react'
import Clock from "../assets/images/clock.svg"
import Developers from "../assets/images/developers.jpg"

function All() {
    return (
        <div className=''>
            <div className="accordion accordion-flush" id="accordionFlushExample">
                <div className="accordion-item">
                    <h1 className='heading'>Recent Posts</h1>
                    <div className='d-flex spans'>
                        <span className='me-auto span-date'>September 24.2020</span>
                        <span className='span-subtitle'>Design theory</span>
                    </div>
                    <h2 className="accordion-header border-bottom" id="flush-headingOne">
                        <button className="accordion p-0 collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                            <p className='title'>Title</p>
                        </button>
                        <div className='d-flex align-items-center mb-3'>
                            <img src={Clock} alt="clock" width={17.5} height={17.5} />
                            <span className='reading-time'>3 minutes read</span>
                        </div>
                    </h2>
                    <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">
                            <img src={Developers} alt='team img' width={400} height={736} />
                            <p>body</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default All