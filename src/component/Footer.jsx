import React from 'react'
import i4gLogo from './assets/I4G.png'

function Footer() {
  return (
    <div className='container mt-5'>
        <hr />
        <div className='d-flex flex-column flex-md-row justify-content-between'>
            <h4>Zuri<b className='fs-2 text-danger'>.</b>Intership</h4>
            <p className='fs-6 text-secondary mt-md-2'>HNG Intership 9 Frontend Task</p>
            <img src={i4gLogo} alt="" className='img-fluid h-25 mt-md-2 col-4 col-md-2 col-lg-1'/>
        </div>
    </div>
    
  )
}

export default Footer