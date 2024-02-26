import React from 'react'
import service1 from '../../../Images/service-1.png'
import service2 from '../../../Images/service-2.png'
import service3 from '../../../Images/service-3.png'
import service4 from '../../../Images/service-4.png'
import service5 from '../../../Images/service-5.png'
import service6 from '../../../Images/service-6.png'
import '../Service/service.css'
export default function Service() {
    return (
        <>
            <div className="service-main container">
                <h1 className='text-center my-5'>Our Best Services</h1>
                <div className="col-lg-12">
                    <div className="row row-gap-5">
                        <div className="col-lg-4 ">
                            <div className="card-body p-5 service-box-1">
                                <img src={service1} className='img-fluid service-image' />
                                <h3 className="card-title text-center fw-bold">24/7 Service</h3>
                                <p className="card-text text-center my-4">we provide 24 * 7 customer service that is available at any time And usually everyday customer queries, recommending solutions and guiding product users through features</p>
                            </div>
                        </div>
                        <div className="col-lg-4 ">
                            <div className="card-body p-5 service-box-1">
                                <img src={service2} className='img-fluid service-image' />
                                <h3 className="card-title text-center fw-bold">Customer Support</h3>
                                <p className="card-text text-center my-4">we provide to Customer Support Specialist responsibilities include resolving customer queries, recommending solutions and guiding product users through features and functionalities.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 ">
                            <div className="card-body p-5 service-box-1">
                                <img src={service3} className='img-fluid service-image' />
                                <h3 className="card-title text-center fw-bold">Best Quality</h3>
                                <p className="card-text text-center my-4">we provide best quality products It typically includes the product features and benefits, highlighting why a visitor should consider making a purchase.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-12">
                    <div className="row row-gap-5">
                        <div className="col-lg-4 ">
                            <div className="card-body p-5 service-box-1">
                                <img src={service4} className='img-fluid service-image' />
                                <h3 className="card-title text-center fw-bold">Fast Delivery</h3>
                                <p className="card-text text-center my-4">we provide 24 * 7 customer service that is available at any time And usually everyday customer queries, recommending solutions and guiding product users through features</p>
                            </div>
                        </div>
                        <div className="col-lg-4 ">
                            <div className="card-body p-5 service-box-1">
                                <img src={service5} className='img-fluid service-image' />
                                <h3 className="card-title text-center fw-bold">Secure Payment</h3>
                                <p className="card-text text-center my-4">we provide to Customer Support Specialist responsibilities include resolving customer queries, recommending solutions and guiding product users through features and functionalities.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 ">
                            <div className="card-body p-5 service-box-1">
                                <img src={service6} className='img-fluid service-image' />
                                <h3 className="card-title text-center fw-bold">Track Location</h3>
                                <p className="card-text text-center my-4">we provide best quality products It typically includes the product features and benefits, highlighting why a visitor should consider making a purchase.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
