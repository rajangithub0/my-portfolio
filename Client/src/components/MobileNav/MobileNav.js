import React, { useState } from 'react'
import "./MobileNav.css"
import { GiHamburgerMenu } from "react-icons/gi";
import { FcAbout, FcBiotech, FcHome, FcReadingEbook, FcVideoProjector } from 'react-icons/fc';
import { AiOutlineMenuFold } from "react-icons/ai";
import { GrUserExpert } from 'react-icons/gr';
import { BiSolidUserDetail } from 'react-icons/bi';
import { Link } from 'react-scroll';

const MobileNav = () => {
    const [open, setOpen] = useState(false)

    //handle open

    const handleOpen = () => {
        setOpen(!open);
    }

    //handle manu click

    const handleMenuClick = () => {
        setOpen(false)
    }
    return (
        <>
            <div className='mobile-nav'>
                <div className='mobile-nav-header'>
                    {open ? (<AiOutlineMenuFold size={30} className='mobile-nav-icon' onClick={handleOpen} />) : (<GiHamburgerMenu size={30} className='mobile-nav-icon' onClick={handleOpen} />)}
                    <span className='mobile-nav-title'>my portfolio app</span>
                </div>
                {open && (<div className='mobile-nav-menu'>
                    <div className='nav-items'>
                        <div className='nav-item'>
                            <div className='nav-link'>
                                <Link to='home' spy={true}
                                    smooth={true}
                                    offset={-50}
                                    duration={100}
                                    onClick={handleMenuClick}> <FcHome />Home</Link>
                            </div>
                        </div>
                        <div className='nav-item'>
                            <div className='nav-link'>
                                <Link to='about' spy={true}
                                    smooth={true}
                                    offset={-50}
                                    duration={100}
                                    onClick={handleMenuClick}>
                                    <FcAbout />
                                    About
                                </Link>
                            </div>
                        </div>
                        <div className='nav-item'>
                            <div className='nav-link'>
                                <Link to='education' spy={true}
                                    smooth={true}
                                    offset={-50}
                                    duration={100}
                                    onClick={handleMenuClick}>
                                    <FcReadingEbook />
                                    Education
                                </Link>
                            </div>
                        </div>

                        <div className='nav-item'>
                            <div className='nav-link'>
                                <Link to='techstack' spy={true}
                                    smooth={true}
                                    offset={-50}
                                    duration={100}
                                    onClick={handleMenuClick}>
                                    <FcBiotech />
                                    Tech Stack
                                </Link>
                            </div>
                        </div>

                        <div className='nav-item'>
                            <div className='nav-link'>
                                <Link to='projects' spy={true}
                                    smooth={true}
                                    offset={-50}
                                    duration={100}
                                    onClick={handleMenuClick}>
                                    <FcVideoProjector
                                    />
                                    Projects
                                </Link>
                            </div>
                        </div>
                        <div className='nav-item'>
                            <div className='nav-link'>
                                <Link to='workexperince' spy={true}
                                    smooth={true}
                                    offset={-50}
                                    duration={100}
                                    onClick={handleMenuClick}>
                                    <GrUserExpert />
                                    Work Experince
                                </Link>
                            </div>
                        </div>
                        {/* <div className='nav-item'>
                            <div className='nav-link'>
                                <FcVoicePresentation /> Testimonial
                            </div>
                        </div> */}
                        <div className='nav-item'>
                            <div className='nav-link'>
                                <Link to='contactdetails' spy={true}
                                    smooth={true}
                                    offset={-50}
                                    duration={100}
                                    onClick={handleMenuClick}>
                                    <BiSolidUserDetail
                                    />
                                    Contact Details
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>)}

            </div>
        </>
    )
}

export default MobileNav