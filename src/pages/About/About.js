import React from 'react'
import './about.css'
import Raj from '../../assets/images/Rajan.JPG'
const About = () => {
    return (
        <>
            <div className='about'>
                <div className="row">
                    <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img" ><img src={Raj} alt='Profie pic' /></div>
                    <div className="col-md-6 about-content"><h1>About me</h1>
                        <p>Enthusiastic Full Stack Developer currently pursuing a Career Program from Skill Academy by Testbook. BSc in IT from Punjab TechnicalUniversity with 62% (2018). Proficient in HTML, CSS, Bootstrap, JavaScript, React.js, Python, Express, Node.js, SQL, and MongoDB. Experienced with SAP and various operating systems and tools including Windows 11 and Outlook. Completed certifications in Software Testing, SAP, and Data Visualization with Power BI. Attended workshops and bootcamps on Excel, HTML & CSS, JavaScript, Python, React, and Data Analysis with Python. Skilled in web development and data analysis.</p></div>
                </div>
            </div>
        </>
    )
}

export default About