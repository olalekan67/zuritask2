import React from 'react'

function Contact({name}) {
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
                    <input type="text" name="first_name" id="first_name" placeholder='Enter your first name' className='col-12 col-md-11 rounded py-2 px-2 contact-input' />
                </label>

                <label htmlFor="last_name" className='col-md-6'>
                Last name <br />
                    <input type="text" name="last_name" id="last_name" placeholder='Enter your last name' className='col-12 col-md-11 rounded py-2 px-2 contact-input' />
                </label>
            </div>
            <label htmlFor="Email" className='pt-4 col-12'>
                Email <br />
                <input type="email" name="email" id="email" placeholder='yourname@email.com' className='form-control contact-input py-2 px-2' />
            </label>
            <label htmlFor="message" className='col-12 pt-4'>
                Message <br />
                <textarea name="message" id="message" rows="5" className='w-100 contact-input px-2 py-2 rounded' placeholder="Send me a message and i'll reply you as soon as possible..."></textarea>
            </label>
            <label htmlFor="checkbox" className='d-flex pt-2'>
                <input type="checkbox" name="checkbox" className='my-2' />
                <p className='my-1 mx-2 mx-md-3'>You agree to providing your data to {name} who may contact you</p>
            </label>
            <input type="submit" value="Send message" className='btn btn-primary w-100 mt-3 mb-3' />
        </form>
    </div>
  )
}

export default Contact