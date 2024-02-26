import React from 'react'
import '../About/about.css'
import about1 from '../../../Images/about-1.png'
import about2 from '../../../Images/about-2.png'
export default function About() {
    return (
        <>
            <div className="container col-12 flex-wrap main-about">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-6">
                        <img src={about1} className='about-1' />
                        <img src={about2} className='about-2' />
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 about-text">
                        <h2 className='fw-bold mb-4'>About Us</h2>
                        <h3 className='mb-4 fw-bold'>We will provide Mechanic & Delivered fuel
                            on your location</h3>
                            <h5 className='mb-4'>This is too good for our helth and mental stress and many more to releted the maintain tasl to consider our the main.thus out that many accept the client issus that consider about the tast to by owner</h5>
                    </div>
                </div>
            </div>
        </>
    )
}
