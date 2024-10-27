import React from 'react'
import "./Project.css"

const Project = () => {
    return (
        <>
            <div className='container project' id='projects'>
                <h2 className='col-12  mt-3 text-center text-uppercase'>
                    top recent projects
                </h2>
                <hr />
                <p className='pb-3 text-center'>
                    👉🏻  here are my top 3 recent projects with live link and source code.
                </p>
                <div className='row' id='ads'>
                    <div className='col-md-4'>
                        <div className='card rounded'>
                            <div className='card-image'>
                                <span className='card-notify-badge'>Full Stack </span>
                                <img src='https://image.pngaaa.com/550/811550-middle.png' alt='project1'></img>
                            </div>
                            <div className='card-image-overly m-auto mt-3'>
                                <span className='card-details-badge'> Node.js </span>
                                <span className='card-details-badge'> Express.js </span>
                                <span className='card-details-badge'> React.js </span>
                                <span className='card-details-badge'> Mongo.db </span>
                            </div>
                            <div className='card-body text-center'>
                                <div className='ad-title m-auto'>
                                    <h5 className='text-uppercase'>e-commerce website</h5>
                                </div>
                                <a className='ad-btn' href='https://github.com/rajangithub0'>View</a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Project