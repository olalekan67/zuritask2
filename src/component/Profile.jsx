import React from 'react'
import profileImg from './assets/profile-img.jpg'

function Profile() {
  return (
    <div className='mx-auto py-4 d-flex flex-column text-center'>
        <img src={profileImg} alt="" id='profile_img' className='text-center mx-auto'/>
        <h5 id='name' className='pt-2'>Bunyamin Abdulsalam</h5>
        <h5 id='twitter' className='d-none'>olalekan103</h5>
        <h5 className="d-none" id='slack'>Bunyamin Abdulsalam</h5>
    </div>
  )
}

export default Profile