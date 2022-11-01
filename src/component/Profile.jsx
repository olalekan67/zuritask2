import React from 'react'
import profileImg from './assets/profile-img.jpg'
import { FaShare } from 'react-icons/fa'
import { TbDots } from 'react-icons/tb'

function Profile({name}) {
  
  return (
    <div className='mx-auto py-4 d-flex flex-column text-center'>
        <img src={profileImg} alt="" id='profile_img' className='text-center img-fluid  mx-auto'/>
        <h5 id='name' className='pt-2'>Bunyamin Abdulsalam</h5>
        <h5 id='twitter' className='d-none'>olalekan103</h5>
        <h5 className="d-none" id='slack'>{name}</h5>
        <div className='position-top ms-auto'>
          <button className='btn btn-outline-secondary col-1 profile-btn d-md-none'><TbDots /></button>
          <button className='btn btn-outline-secondary col-1 profile-btn d-none d-md-block'><FaShare /></button>
        </div>
    </div>
  )
}

export default Profile
