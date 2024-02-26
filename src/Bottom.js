import React from 'react'
import './bottom.css'
import logo from './Images/logo.png'
import { FaSquareFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import logof1 from './Images/footer-logo-1.png'
import logof2 from './Images/footer-logo-2.png'
import logof3 from './Images/footer-logo-3.png'
import logof4 from './Images/footer-logo-4.png'
export default function Bottom() {
  return (
    <>
      <div className="footer">
        <div className="footer-main container-fluid p-5">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 d-flex flex-wrap row-gap-4">
              <div className="col-lg-3 d-flex flex-column col-md-4 col-sm-4 p-5">
                <img src={logo} className='img-fluid cmp-logo' />
                <p className='my-5'>fuemech@gmail.com</p>
                <div className="icons">
                  <FaSquareFacebook className='footer-icons' />
                  <FaInstagram className='footer-icons' />
                  <FaTwitter className='footer-icons' />
                  <FaWhatsapp className='footer-icons' />
                  <FaLinkedin className='footer-icons' />
                </div>
              </div>
              <div className="col-lg-5 col-md-4 col-sm-4 p-5">
                <h3 className='my-2'>ABOUT</h3>
                <p className='my-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum dolor excepturi totam nostrum porro placeat quas consequuntur aspernatur non vero?</p>
                <div className="icons my-5">
                  <img src={logof1} className='p-logo' />
                  <img src={logof2} className='p-logo' />
                  <img src={logof3} className='p-logo' />
                  <img src={logof4} className='p-logo' />
                </div>
              </div>
              <div className="col-lg-2 col-md-2 col-sm-2 p-5">
                <h3>SERVICE</h3>
                <div className="text-service my-5">
                  <p>Fuel Delivery</p>
                  <p>Mechanic Provider</p>
                  <p>24/7 available</p>
                </div>
              </div>
              <div className="col-lg-2 col-md-2 col-sm-2 p-5">
                <h3>LINKS</h3>
                <div className="text-service my-5">
                  <p>Contact Us</p>
                  <p>Fuel</p>
                  <p>Mechanic</p>
                  <p>Order Status</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

