import React from 'react'
import profileImg from './assets/profile-img.jpg'

function Profile() {
  return (
    <div className='mx-auto py-4 d-flex flex-column text-center'>
        <img src={profileImg} alt="" id='profile_img' className='text-center mx-auto'/>
        <h5 id='twitter' className='pt-2'>olalekan103</h5>
        <h5 className="d-none" id='slack'>Olalekan</h5>
    </div>
  )
}

export default Profile