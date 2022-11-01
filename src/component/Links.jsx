import React from 'react'
// import { useState } from 'react'
import { FaGithub} from 'react-icons/fa'
import slackImg from './assets/slackLogo.png'

function Links({name}) {
     
  return (
     <section>
          <div>
               <a href="https://twitter.com/olalekan103" target='_blank' rel='noreferrer'>
                    <button className='btn btns w-100' id='twitter'>Twitter Link</button>
               </a>
               <a href="https://training.zuri.team/"  target='_blank' rel='noreferrer'> 
                    <button className="btn btns w-100" id='btn_zuri'>Zuri Team</button>
               </a>
               <a href="http://books.zuri.team"  target='_blank' rel='noreferrer'>
                    <button className="btn btns w-100" id='books'>Zuri Books <br /> <p className='px-2'>Where you find books about design and coding</p></button>
               </a>
               <a href={`https://books.zuri.team/python-for-beginners?ref_id=${name}`}  target='_blank' rel='noreferrer'>
                    <button className="btn btns w-100" id='book_python'>Python Books</button>
               </a>
               <a href="https://background.zuri.team"  target='_blank' rel='noreferrer'>
                    <button className="btn btns w-100" id='pitch'>Background Check for Coders <br /> <p className='px-2'>Where you can do background checks on coders</p></button>
               </a>
               <a href="https://books.zuri.team/design-rules"  target='_blank' rel='noreferrer'>
                    <button className="btn btns w-100" id='book_design'>Design Books</button>
               </a>
     </div>
          <div className='d-flex flex-row justify-content-center gap-3 gap-md-4 mt-2'>
          <a href="https://slack.com/Abdulsalam Bunyamin" target="_blank" rel="noreferrer"><img src={slackImg} alt="" className='img-fluid text-dark fs-3 mt-2 mt-md-3 mx-2 slack-img' /></a>
          <a href="http://github.com/olalekan67/zuritask1" className='text-dark fs-3 mt-md-1' target="_blank" rel="noreferrer"><FaGithub /></a>
     </div>
     </section>
    
  )
}

export default Links
