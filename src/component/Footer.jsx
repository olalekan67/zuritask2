import React from 'react'
import i4gLogo from './assets/I4G.png'
import zuriLogo from './assets/Vector.png'

function Footer() {
  return (
    <div className='container mt-5'>
        <hr />
        <div className='d-flex flex-column flex-md-row justify-content-between'>
            <img src={zuriLogo} alt="" className='img-fluid h-25 mb-2 mt-1 col-4 col-md-2' />
            <p className='fs-6 text-secondary'>HNG Intership 9 Frontend Task</p>
            <img src={i4gLogo} alt="" className='img-fluid h-25  col-4 col-md-2'/>
        </div>
    </div>
    
  )
}

export default Footer