import React from 'react'
import '../Seller/seller.css'
import seller1 from '../../../Images/seller-1.png'
import seller2 from '../../../Images/seller-2.png'
import seller3 from '../../../Images/seller-3.png'
import seller4 from '../../../Images/seller-4.png'
import { FaStar } from "react-icons/fa6";
export default function Seller() {
    return (
        <>
            <div className="seller-main mb-3 container">
                <h1 className='seller-heading'>Best Seller</h1>
                <h3 className='fw-bold my-3 px-5'>Fuel</h3>
                <div className="col-lg-12">
                    <div className="row ">
                        <div className="col-lg-6 col-md-6 col-sm-6 seller-main-2">
                            <div className="box-1 d-flex">
                                <div className="inner-box d-flex">
                                    <img src={seller1} width='140px' />
                                    <div className="inner-text d-flex flex-column">
                                        <h3>Shell</h3>
                                        <div className="icon d-flex">
                                            <FaStar style={{ fill: 'yellow' }} />
                                            <FaStar style={{ fill: 'yellow' }} />
                                            <FaStar style={{ fill: 'yellow' }} />
                                            <FaStar style={{ fill: 'yellow' }} />
                                            <FaStar style={{ fill: 'yellow' }} />
                                        </div>
                                        <h5 className='mt-4'>Petrol: ₹ 98.00</h5>
                                        <h5>Diesel: ₹ 95.00</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6">
                            <div className="box-1 d-flex">
                                <div className="inner-box d-flex">
                                    <img src={seller2} width='140px' />
                                    <div className="inner-text d-flex flex-column">
                                        <h3>Nayra</h3>
                                        <div className="icon d-flex">
                                            <FaStar style={{ fill: 'yellow' }} />
                                            <FaStar style={{ fill: 'yellow' }} />
                                            <FaStar style={{ fill: 'yellow' }} />
                                            <FaStar style={{ fill: 'yellow' }} />
                                            <FaStar style={{ fill: 'yellow' }} />
                                        </div>
                                        <h5 className='mt-4'>Petrol: ₹ 98.00</h5>
                                        <h5>Diesel: ₹ 95.00</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <h3 className='fw-bold my-5 px-5'>Mechanic</h3>
                <div className="col-lg-12">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-6 seller-main-2">
                            <div className="box-1 d-flex">
                                <div className="inner-box d-flex">
                                    <img src={seller3} width='140px' />
                                    <div className="inner-text d-flex flex-column py-5 px-1">
                                        <p><span className='text-success'>Address :</span>KIRAN CHOWK</p>
                                        <p><span className='text-success'>Charge :</span> RS.100.00</p>
                                        <p className='text-success d-flex align-item-center my-auto'>Rating :
                                            <div className="icon d-flex align-item-center my-auto">
                                                <FaStar style={{ fill: 'yellow' }} />
                                                <FaStar style={{ fill: 'yellow' }} />
                                                <FaStar style={{ fill: 'yellow' }} />
                                                <FaStar style={{ fill: 'yellow' }} />
                                                <FaStar style={{ fill: 'yellow' }} />
                                            </div>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6">
                            <div className="box-1 d-flex">
                                <div className="inner-box d-flex">
                                    <img src={seller4} width='140px' />
                                    <div className="inner-text d-flex flex-column py-5 px-2">
                                        <p><span className='text-success'>Address :</span>KIRAN CHOWK</p>
                                        <p><span className='text-success'>Charge :</span> RS.100.00</p>
                                        <p className='text-success d-flex align-item-center my-auto'>Rating :
                                            <div className="icon d-flex align-item-center my-auto">
                                                <FaStar style={{ fill: 'yellow' }} />
                                                <FaStar style={{ fill: 'yellow' }} />
                                                <FaStar style={{ fill: 'yellow' }} />
                                                <FaStar style={{ fill: 'yellow' }} />
                                                <FaStar style={{ fill: 'yellow' }} />
                                            </div>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
