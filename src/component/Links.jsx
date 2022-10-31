import React from 'react'
import { FaGithub, FaSlack } from 'react-icons/fa'

function Links() {
  return (
     <section>
          <div>
               <a href="https://twitter.com/olalekan103" target='_blank' rel='noreferrer'>
                    <button className='btn w-100' id='twitter'>Twitter Link</button>
               </a>
               <a href="https://training.zuri.team/"  target='_blank' rel='noreferrer'> 
                    <button className="btn w-100" id='btn_zuri'>Zuri Team</button>
               </a>
               <a href="http://books.zuri.team"  target='_blank' rel='noreferrer'>
                    <button className="btn w-100" id='books'>Zuri Books</button>
               </a>
               <a href="https://books.zuri.team/python-for-beginners?ref_id=<Bunyamin Abdulsalam>"  target='_blank' rel='noreferrer'>
                    <button className="btn w-100" id='book_python'>Python Books</button>
               </a>
               <a href="https://background.zuri.team"  target='_blank' rel='noreferrer'>
                    <button className="btn w-100" id='pitch'>Background Check for Coders</button>
               </a>
               <a href="https://books.zuri.team/design-rules"  target='_blank' rel='noreferrer'>
                    <button className="btn w-100" id='book_design'>Design Books</button>
               </a>
     </div>
          <div className='d-flex flex-row justify-content-center gap-3 gap-md-4 mt-2'>
               <a href="http://github.com/olalekan67" className='text-dark fs-3' target="_blank" rel="noreferrer"><FaGithub /></a>
               <FaSlack className='text-dark fs-3 mt-2'/>
     </div>
     </section>
    
  )
}

export default Links