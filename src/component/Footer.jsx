import React from 'react'
import { FaGithub, FaSlack } from 'react-icons/fa'

function Footer() {
  return (
    <div className='d-flex flex-row justify-content-center gap-3 gap-md-4 mt-5'>
        <a href="http://github.com/olalekan67" className='text-dark fs-3' target="_blank" rel="noreferrer"><FaGithub /></a>
        <FaSlack className='text-dark fs-3 mt-2'/>
    </div>
  )
}

export default Footer