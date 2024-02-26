import React from 'react'
import slider1 from '../../../Images/slider-1.png'
import '../Customer/customer.css'
export default function Customer() {
  return (
    <>
      <div className="customer-main text-center container">
        <h2>What Happy Customer have</h2>
        <h2 className='mb-5'>to say about <span className='text-success'>Fuemach</span></h2>
        <div className="col-12">
            <div className="row">
                <div className="customer-card col-lg-4 col-md-4 col-sm-4 p-5">
                    <img src={slider1} className='slider-img img-fluid' />
                    <h3 className='my-4'>John Deo</h3>
                    <p>"Relly Made it easy for me to find mechanic for my car its make to easy and made for car rent"</p>
                </div>
                <div className="customer-card col-lg-4 col-md-4 col-sm-4 p-5">
                    <img src={slider1} className='slider-img img-fluid' />
                    <h3 className='my-4'>John Deo</h3>
                    <p>"Relly Made it easy for me to find mechanic for my car its make to easy and made for car rent"</p>
                </div>
                <div className="customer-card col-lg-4 col-md-4 col-sm-4 p-5">
                    <img src={slider1} className='slider-img img-fluid' />
                    <h3 className='my-4'>John Deo</h3>
                    <p>"Relly Made it easy for me to find mechanic for my car its make to easy and made for car rent"</p>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}
