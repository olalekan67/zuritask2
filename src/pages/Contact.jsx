import React from 'react'
import { useState } from 'react'

function Contact({name}) {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const[email, setEmail] = useState('')
    const[message, setMessage] = useState('')
    const[check, setCheck] = useState(false)
    const checkInp = document.getElementById('check')

    const handleSubmit = (e) => {
        e.preventDefault()
        if(firstName && lastName && email && message && check){
            setFirstName('')
            setLastName('')
            setEmail('')
            setMessage('')
            checkInp.checked = false
            setCheck(false)
        }else{
            alert('Fill all the fields in the form')
        }
    }
  return (
    <div className='container py-5'>
        <div className='pb-3'>
            <h3>Contact Me</h3>
            <p>Hi there, contact me to ask me about anything you have in mind.</p>
        </div>
        <form>
            <div className='d-flex flex-column flex-md-row gap-5'>
                <label htmlFor="first_name" className='col-md-6'>
                    First name <br />
                    <input type="text" name="first_name" value={firstName} onChange={(e) => setFirstName(e.target.value)} id="first_name" required placeholder='Enter your first name' className='col-12 col-md-11 rounded py-2 px-2 contact-input' />
                </label>

                <label htmlFor="last_name" className='col-md-6'>
                Last name <br />
                    <input type="text" name="last_name" value={lastName} onChange={(e) => setLastName(e.target.value)} id="last_name" required placeholder='Enter your last name' className='col-12 col-md-11 rounded py-2 px-2 contact-input' />
                </label>
            </div>
            <label htmlFor="Email" className='pt-4 col-12'>
                Email <br />
                <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} id="email" required placeholder='yourname@email.com' className='form-control contact-input py-2 px-2' />
            </label>
            <label htmlFor="message" className='col-12 pt-4'>
                Message <br />
                <textarea name="message" value={message} onChange={(e) => setMessage(e.target.value)} id="message" rows="5" required className='w-100 contact-input px-2 py-2 rounded' placeholder="Send me a message and i'll reply you as soon as possible..."></textarea>
            </label>
            <label htmlFor="checkbox" className='d-flex pt-2'>
                <input type="checkbox" value={check} name="checkbox" onClick={(e) => setCheck(!check)} className='mt-1 ' id='check' required/>
                <p className='mx-2 mx-md-3'>You agree to providing your data to {name} who may contact you</p>
            </label>
            <button type='submit' id='btn__submit' onClick={handleSubmit} className='btn btn-primary w-100 mt-3 mb-3'>Send message</button>
        </form>
    </div>
  )
}

export default Contact
