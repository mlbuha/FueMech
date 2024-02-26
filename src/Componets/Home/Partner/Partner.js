import React from 'react'
import logo1 from '../../../Images/official-1.png'
import logo2 from '../../../Images/official-2.png'
import logo3 from '../../../Images/official-3.png'
import logo4 from '../../../Images/official-4.png'
import logo5 from '../../../Images/official-5.png'
import '../Partner/partner.css'
export default function Partner() {
  return (
    <>
      <div className="official-main container-fluid">
        <h1 className='text-center official-text'>Official Partner</h1>
        <div className="col-12 partner-main">
            <div className='col-lg-2'>
                <img src={logo1} />
            </div>
            <div className='col-lg-2'>
                <img src={logo2} />
            </div>
            <div className='col-lg-2'>
                <img src={logo3} />
            </div>
            <div className='col-lg-2'>
                <img src={logo4} />
            </div>
            <div className='col-lg-2'>
                <img src={logo5} />
            </div>
        </div>
      </div>
    </>
  )
}
