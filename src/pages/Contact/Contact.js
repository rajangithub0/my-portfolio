import React from 'react'
import { BsGithub, BsLinkedin } from "react-icons/bs";
import "./Contact.css"

const Contact = () => {
    return (
        <>
            <div className='container contact' id='contactdetails'>
                <div className='card card0 border-0'>
                    <div className='row'>
                        <div className='col-md-6 col-lg-6 col-xl-6 col-sm-12'>
                            <div className='card1'>
                                <div className='row border-line'>
                                    <img src='https://www.anandgroupindia.com/wp-content/uploads/2019/05/contactus.jpg' alt='contact' className='image'></img>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-6 col-lg-6'>
                            <div className='card2 d-flex card border-0 px-4 py-6'>
                                <div className='row'>
                                    <div className='row'>
                                        <h6>Contact with
                                            <BsLinkedin color='blue' size={30} className='ms-2' />
                                            <BsGithub color='black' size={30} className='ms-2' />
                                        </h6>
                                    </div>
                                </div>
                                <div className='row px-3 md-4'>
                                    <div className='line' />
                                    <small className='or text-center'>OR</small>
                                    <div className='line' />
                                </div>
                                <div className='row px-3'>
                                    <input type='text' name='name' placeholder='write your name' className='mb-3' />
                                    <input type='e-mail' name='email' placeholder='write your email' className='mb-3' />
                                    <textarea type='text' name='msg' placeholder='write your massage' className='mb-3' />
                                </div>
                                <div className='row px-3'>
                                    <button className='button' type='sumbit'>SEND MASSAGE</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact