import React from 'react'
import '../Mechanic/mechanic.css'
import mech1 from '../../Images/mech-1.png'
import mech2 from '../../Images/mech-2.png'
import mech3 from '../../Images/mech-3.png'
import mech4 from '../../Images/mech-4.png'
import mech5 from '../../Images/mech-5.png'
import mech6 from '../../Images/mech-6.png'
import mech7 from '../../Images/mech-7.png'
import mech8 from '../../Images/mech-8.png'
import mech9 from '../../Images/mech-9.png'
import { FaLocationDot } from "react-icons/fa6";
import { FaStar } from "react-icons/fa6";
export default function Mechanic() {
    return (
        <>
            <div className="search-bar container">
                <form class="d-flex">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button type='submit' className='hero-btn srch-btn'>Search</button>
                </form>
            </div>
            <div className="main-mech">
                <div className="main-mechanic container my-5">
                    <div className="col-lg-12 col-md-12 col-sm-12">
                        <div className="row">
                            <div className="col-lg-6 inner-img col-md-6 col-sm-6">
                                <img src={mech1} className='img-fluid' />
                            </div>
                            <div className="col-lg-6 inner-text p-5 col-md-6 col-sm-6">
                                <h1>HP</h1>
                                <div className="location-text d-flex">
                                    <FaLocationDot fill={'red'} className='icon-location my-3' />
                                    <p className='my-auto mx-4'>Kiran Chowk , near yogi Chowk , Varachha road , surat , 395006</p>
                                </div>
                                <p className='fw-bold mech-price'>100.00₹</p>
                                <div className="icon d-flex mb-3">
                                    <FaStar style={{ fill: 'yellow' }} className='mx-1' />
                                    <FaStar style={{ fill: 'yellow' }} className='mx-1' />
                                    <FaStar style={{ fill: 'yellow' }} className='mx-1' />
                                    <FaStar style={{ fill: 'yellow' }} className='mx-1' />
                                    <FaStar style={{ fill: 'yellow' }} className='mx-1' />
                                </div>
                                <button type='submit' className='hero-btn'>Order Now</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="main-mechanic container my-5">
                    <div className="col-lg-12 col-md-12 col-sm-12">
                        <div className="row">
                            <div className="col-lg-6 inner-img col-md-6 col-sm-6">
                                <img src={mech2} className='img-fluid' />
                            </div>
                            <div className="col-lg-6 inner-text p-5 col-md-6 col-sm-6">
                                <h1>Shell</h1>
                                <div className="location-text d-flex">
                                    <FaLocationDot fill={'red'} className='icon-location my-3' />
                                    <p className='my-auto mx-4'>Kiran Chowk , near yogi Chowk , Varachha road , surat , 395006</p>
                                </div>
                                <p className='fw-bold mech-price'>120.00₹</p>
                                <div className="icon d-flex mb-3">
                                    <FaStar style={{ fill: 'yellow' }} className='mx-1' />
                                    <FaStar style={{ fill: 'yellow' }} className='mx-1' />
                                    <FaStar style={{ fill: 'yellow' }} className='mx-1' />
                                    <FaStar style={{ fill: 'yellow' }} className='mx-1' />
                                    <FaStar style={{ fill: 'yellow' }} className='mx-1' />
                                </div>
                                <button type='submit' className='hero-btn'>Order Now</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="main-mechanic container my-5">
                    <div className="col-lg-12 col-md-12 col-sm-12">
                        <div className="row">
                            <div className="col-lg-6 inner-img col-md-6 col-sm-6">
                                <img src={mech3} className='img-fluid' />
                            </div>
                            <div className="col-lg-6 inner-text p-5 col-md-6 col-sm-6">
                                <h1>Indian Oli</h1>
                                <div className="location-text d-flex">
                                    <FaLocationDot fill={'red'} className='icon-location my-3' />
                                    <p className='my-auto mx-4'>Kiran Chowk , near yogi Chowk , Varachha road , surat , 395006</p>
                                </div>
                                <p className='fw-bold mech-price'>115.00₹</p>
                                <div className="icon d-flex mb-3">
                                    <FaStar style={{ fill: 'yellow' }} className='mx-1' />
                                    <FaStar style={{ fill: 'yellow' }} className='mx-1' />
                                    <FaStar style={{ fill: 'yellow' }} className='mx-1' />
                                    <FaStar style={{ fill: 'yellow' }} className='mx-1' />
                                    <FaStar style={{ fill: 'yellow' }} className='mx-1' />
                                </div>
                                <button type='submit' className='hero-btn'>Order Now</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="main-mechanic container my-5">
                    <div className="col-lg-12 col-md-12 col-sm-12">
                        <div className="row">
                            <div className="col-lg-6 inner-img col-md-6 col-sm-6">
                                <img src={mech4} className='img-fluid' />
                            </div>
                            <div className="col-lg-6 inner-text p-5 col-md-6 col-sm-6">
                                <h1>Nayra</h1>
                                <div className="location-text d-flex">
                                    <FaLocationDot fill={'red'} className='icon-location my-3' />
                                    <p className='my-auto mx-4'>Kiran Chowk , near yogi Chowk , Varachha road , surat , 395006</p>
                                </div>
                                <p className='fw-bold mech-price'>100.00₹</p>
                                <div className="icon d-flex mb-3">
                                    <FaStar style={{ fill: 'yellow' }} className='mx-1' />
                                    <FaStar style={{ fill: 'yellow' }} className='mx-1' />
                                    <FaStar style={{ fill: 'yellow' }} className='mx-1' />
                                    <FaStar style={{ fill: 'yellow' }} className='mx-1' />
                                    <FaStar style={{ fill: 'yellow' }} className='mx-1' />
                                </div>
                                <button type='submit' className='hero-btn'>Order Now</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="main-mechanic container my-5">
                    <div className="col-lg-12 col-md-12 col-sm-12">
                        <div className="row">
                            <div className="col-lg-6 inner-img col-md-6 col-sm-6">
                                <img src={mech5} className='img-fluid' />
                            </div>
                            <div className="col-lg-6 inner-text p-5 col-md-6 col-sm-6">
                                <h1>Jio</h1>
                                <div className="location-text d-flex">
                                    <FaLocationDot fill={'red'} className='icon-location my-3' />
                                    <p className='my-auto mx-4'>Kiran Chowk , near yogi Chowk , Varachha road , surat , 395006</p>
                                </div>
                                <p className='fw-bold mech-price'>100.00₹</p>
                                <div className="icon d-flex mb-3">
                                    <FaStar style={{ fill: 'yellow' }} className='mx-1' />
                                    <FaStar style={{ fill: 'yellow' }} className='mx-1' />
                                    <FaStar style={{ fill: 'yellow' }} className='mx-1' />
                                    <FaStar style={{ fill: 'yellow' }} className='mx-1' />
                                    <FaStar style={{ fill: 'yellow' }} className='mx-1' />
                                </div>
                                <button type='submit' className='hero-btn'>Order Now</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="main-mechanic container my-5">
                    <div className="col-lg-12 col-md-12 col-sm-12">
                        <div className="row">
                            <div className="col-lg-6 inner-img col-md-6 col-sm-6">
                                <img src={mech6} className='img-fluid' />
                            </div>
                            <div className="col-lg-6 inner-text p-5 col-md-6 col-sm-6">
                                <h1>Indian Oli</h1>
                                <div className="location-text d-flex">
                                    <FaLocationDot fill={'red'} className='icon-location my-3' />
                                    <p className='my-auto mx-4'>Kiran Chowk , near yogi Chowk , Varachha road , surat , 395006</p>
                                </div>
                                <p className='fw-bold mech-price'>100.00₹</p>
                                <div className="icon d-flex mb-3">
                                    <FaStar style={{ fill: 'yellow' }} className='mx-1' />
                                    <FaStar style={{ fill: 'yellow' }} className='mx-1' />
                                    <FaStar style={{ fill: 'yellow' }} className='mx-1' />
                                    <FaStar style={{ fill: 'yellow' }} className='mx-1' />
                                    <FaStar style={{ fill: 'yellow' }} className='mx-1' />
                                </div>
                                <button type='submit' className='hero-btn'>Order Now</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="main-mechanic container my-5">
                    <div className="col-lg-12 col-md-12 col-sm-12">
                        <div className="row">
                            <div className="col-lg-6 inner-img col-md-6 col-sm-6">
                                <img src={mech7} className='img-fluid' />
                            </div>
                            <div className="col-lg-6 inner-text p-5 col-md-6 col-sm-6">
                                <h1>Shell</h1>
                                <div className="location-text d-flex">
                                    <FaLocationDot fill={'red'} className='icon-location my-3' />
                                    <p className='my-auto mx-4'>Kiran Chowk , near yogi Chowk , Varachha road , surat , 395006</p>
                                </div>
                                <p className='fw-bold mech-price'>100.00₹</p>
                                <div className="icon d-flex mb-3">
                                    <FaStar style={{ fill: 'yellow' }} className='mx-1' />
                                    <FaStar style={{ fill: 'yellow' }} className='mx-1' />
                                    <FaStar style={{ fill: 'yellow' }} className='mx-1' />
                                    <FaStar style={{ fill: 'yellow' }} className='mx-1' />
                                    <FaStar style={{ fill: 'yellow' }} className='mx-1' />
                                </div>
                                <button type='submit' className='hero-btn'>Order Now</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="main-mechanic container my-5">
                    <div className="col-lg-12 col-md-12 col-sm-12">
                        <div className="row">
                            <div className="col-lg-6 inner-img col-md-6 col-sm-6">
                                <img src={mech8} className='img-fluid' />
                            </div>
                            <div className="col-lg-6 inner-text p-5 col-md-6 col-sm-6">
                                <h1>Nayra</h1>
                                <div className="location-text d-flex">
                                    <FaLocationDot fill={'red'} className='icon-location my-3' />
                                    <p className='my-auto mx-4'>Kiran Chowk , near yogi Chowk , Varachha road , surat , 395006</p>
                                </div>
                                <p className='fw-bold mech-price'>100.00₹</p>
                                <div className="icon d-flex mb-3">
                                    <FaStar style={{ fill: 'yellow' }} className='mx-1' />
                                    <FaStar style={{ fill: 'yellow' }} className='mx-1' />
                                    <FaStar style={{ fill: 'yellow' }} className='mx-1' />
                                    <FaStar style={{ fill: 'yellow' }} className='mx-1' />
                                    <FaStar style={{ fill: 'yellow' }} className='mx-1' />
                                </div>
                                <button type='submit' className='hero-btn'>Order Now</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="main-mechanic container my-5">
                    <div className="col-lg-12 col-md-12 col-sm-12">
                        <div className="row">
                            <div className="col-lg-6 inner-img col-md-6 col-sm-6">
                                <img src={mech9} className='img-fluid' />
                            </div>
                            <div className="col-lg-6 inner-text p-5 col-md-6 col-sm-6">
                                <h1>HP</h1>
                                <div className="location-text d-flex">
                                    <FaLocationDot fill={'red'} className='icon-location my-3' />
                                    <p className='my-auto mx-4'>Kiran Chowk , near yogi Chowk , Varachha road , surat , 395006</p>
                                </div>
                                <p className='fw-bold mech-price'>100.00₹</p>
                                <div className="icon d-flex mb-3">
                                    <FaStar style={{ fill: 'yellow' }} className='mx-1' />
                                    <FaStar style={{ fill: 'yellow' }} className='mx-1' />
                                    <FaStar style={{ fill: 'yellow' }} className='mx-1' />
                                    <FaStar style={{ fill: 'yellow' }} className='mx-1' />
                                    <FaStar style={{ fill: 'yellow' }} className='mx-1' />
                                </div>
                                <button type='submit' className='hero-btn'>Order Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
