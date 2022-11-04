import React from 'react'
import Profile from '../component/Profile'
import Links from '../component/Links'


function Home({name}) {
    
  return (
    <div>
        <Profile name={name}/>
        <Links name={name}/>
    </div>
  )
}

export default Home