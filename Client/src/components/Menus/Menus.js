import React from 'react';
import { FcAbout, FcBiotech, FcHome, FcReadingEbook, FcVideoProjector } from "react-icons/fc";
import { GrUserExpert } from "react-icons/gr";
import { BiSolidUserDetail } from "react-icons/bi";
import raj from '../../assets/images/Rajan.JPG';
import { Link } from 'react-scroll';
import "./Menus.css";
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';

const Menus = ({ toggle }) => {
    return (
        <>
            {toggle ? (
                <>
                    <Zoom>
                        <div className='navbar-profile-pic'>
                            <img src={raj} alt='Profie pic' />
                        </div>
                    </Zoom>
                    <Fade left>
                        <div className='nav-items'>
                            <div className='nav-item'>
                                <div className='nav-link'>
                                    <Link to='home' spy={true}
                                        smooth={true}
                                        offset={-50}
                                        duration={100}> <FcHome />Home</Link>
                                </div>
                            </div>
                            <div className='nav-item'>
                                <div className='nav-link'>
                                    <Link to='about' spy={true}
                                        smooth={true}
                                        offset={-50}
                                        duration={100}>
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
                                        duration={100} >
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
                                        duration={100}>
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
                                        duration={100}>
                                        <FcVideoProjector />
                                        Projects
                                    </Link>
                                </div>
                            </div>
                            <div className='nav-item'>
                                <div className='nav-link'>
                                    <Link to='workexperince' spy={true}
                                        smooth={true}
                                        offset={-50}
                                        duration={100}>
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
                                        duration={100}>
                                        <BiSolidUserDetail />
                                        Contact Details
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </Fade>
                </>
            ) : (
                <>
                    <div className='nav-items'>
                        <div className='nav-item'>
                            <div className='nav-link'>
                                <div className='nav-link'>
                                    <Link to='home' spy={true}
                                        smooth={true}
                                        offset={-50}
                                        duration={100}>
                                        <FcHome />
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className='nav-item'>
                            <div className='nav-link'>
                                <Link to='about' spy={true}
                                    smooth={true}
                                    offset={-50}
                                    duration={100}>
                                    <FcAbout />
                                </Link>
                            </div>
                        </div>
                        <div className='nav-item'>
                            <div className='nav-link'>
                                <Link to='education' spy={true}
                                    smooth={true}
                                    offset={-50}
                                    duration={100} >
                                    <FcReadingEbook />
                                </Link>
                            </div>
                        </div>
                        <div className='nav-item'>
                            <div className='nav-link'>
                                <Link to='techstack' spy={true}
                                    smooth={true}
                                    offset={-50}
                                    duration={100}>
                                    <FcBiotech />
                                </Link>
                            </div>
                        </div>
                        <div className='nav-item'>
                            <div className='nav-link'>
                                <Link to='projects' spy={true}
                                    smooth={true}
                                    offset={-50}
                                    duration={100}>
                                    <FcVideoProjector />
                                </Link>
                            </div>
                        </div>
                        <div className='nav-item'>
                            <div className='nav-link'>
                                <Link to='workexperince' spy={true}
                                    smooth={true}
                                    offset={-50}
                                    duration={100}>
                                    <GrUserExpert />
                                </Link>
                            </div>
                        </div>
                        {/* <div className='nav-item'>
                            <div className='nav-link'>
                                <FcVoicePresentation title='Testimonial' />
                            </div>
                        </div> */}
                        <div className='nav-item'>
                            <div className='nav-link'>
                                <Link to='contactdetails' spy={true}
                                    smooth={true}
                                    offset={-50}
                                    duration={100}>
                                    <BiSolidUserDetail />
                                </Link>
                            </div>
                        </div>
                    </div>

                </>
            )}

        </>
    )
}

export default Menus