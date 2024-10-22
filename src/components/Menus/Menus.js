import React from 'react';
import { FcAbout, FcBiotech, FcHome, FcReadingEbook, FcVideoProjector, FcVoicePresentation } from "react-icons/fc";
import { GrUserExpert } from "react-icons/gr";
import { BiSolidUserDetail } from "react-icons/bi";

import "./Menus.css";

const Menus = ({ toggle }) => {
    return (
        <>
            {toggle ? (
                <>
                    <div className='navbar-profile-pic'>
                        <img src='https://d2qp0siotla746.cloudfront.net/img/use-cases/profile-picture/template_0.jpg' alt='Profie pic' />
                    </div>
                    <div className='nav-items'>
                        <div className='nav-item'>
                            <div className='nav-link'>
                                <FcHome /> Home
                            </div>
                        </div>
                        <div className='nav-item'>
                            <div className='nav-link'>
                                <FcAbout /> About
                            </div>
                        </div>
                        <div className='nav-item'>
                            <div className='nav-link'>
                                <GrUserExpert /> Work Experince
                            </div>
                        </div>
                        <div className='nav-item'>
                            <div className='nav-link'>
                                <FcBiotech /> Tech Stack
                            </div>
                        </div>
                        <div className='nav-item'>
                            <div className='nav-link'>
                                <FcReadingEbook /> Education
                            </div>
                        </div>
                        <div className='nav-item'>
                            <div className='nav-link'>
                                <FcVideoProjector /> Projects
                            </div>
                        </div>
                        <div className='nav-item'>
                            <div className='nav-link'>
                                <FcVoicePresentation /> Testimonial
                            </div>
                        </div>
                        <div className='nav-item'>
                            <div className='nav-link'>
                                <BiSolidUserDetail /> Contact Details
                            </div>
                        </div>
                    </div>
                </>
            ) : (
                <>
                    <div className='nav-items'>
                        <div className='nav-item'>
                            <div className='nav-link'>
                                <FcHome title='Home' />
                            </div>
                        </div>
                        <div className='nav-item'>
                            <div className='nav-link'>
                                <FcAbout title='About' />
                            </div>
                        </div>
                        <div className='nav-item'>
                            <div className='nav-link'>
                                <GrUserExpert title='Work Exprince' />
                            </div>
                        </div>
                        <div className='nav-item'>
                            <div className='nav-link'>
                                <FcBiotech title='Tech Stack' />
                            </div>
                        </div>
                        <div className='nav-item'>
                            <div className='nav-link'>
                                <FcReadingEbook title='Education' />
                            </div>
                        </div>
                        <div className='nav-item'>
                            <div className='nav-link'>
                                <FcVideoProjector title='Projects' />
                            </div>
                        </div>
                        <div className='nav-item'>
                            <div className='nav-link'>
                                <FcVoicePresentation title='Testimonial' />
                            </div>
                        </div>
                        <div className='nav-item'>
                            <div className='nav-link'>
                                <BiSolidUserDetail title='Contact Details' />
                            </div>
                        </div>
                    </div>
                </>
            )}

        </>
    )
}

export default Menus