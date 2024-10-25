import React from 'react';
import './WrokExp.css';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { MdWork } from "react-icons/md";


const WorkExp = () => {
    return (
        <>
            <div className='container work'>
                <div className='work-exp'>
                    <h2 className='col-12 mt-3 mb-1 text-center text-uppercase'>
                        Work Experience
                    </h2>
                    <hr />
                    <VerticalTimeline lineColor='#1e1e2c'>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={{ background: 'white', color: 'black' }}
                            contentArrowStyle={{ borderRight: '7px solid  white' }}
                            date="2015 - 2018"
                            iconStyle={{ background: '#1e1e2c', color: '#fff' }}
                            icon={<MdWork />}
                        >
                            <h3 className="vertical-timeline-element-title">Rana Account Servies</h3>
                            <h4 className="vertical-timeline-element-subtitle">Web Developer</h4>
                            <p>
                                Creative Direction, User Experience, Visual Design, Project Management, Team Leading
                            </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={{ background: 'white', color: 'black' }}
                            contentArrowStyle={{ borderRight: '7px solid  white' }}
                            date="2015 - 2018"
                            iconStyle={{ background: '#1e1e2c', color: '#fff' }}
                            icon={<MdWork />}
                        >
                            <h3 className="vertical-timeline-element-title">Rana Account Servies</h3>
                            <h4 className="vertical-timeline-element-subtitle">Web Developer</h4>
                            <p>
                                Creative Direction, User Experience, Visual Design, Project Management, Team Leading
                            </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={{ background: 'white', color: 'black' }}
                            contentArrowStyle={{ borderRight: '7px solid  white' }}
                            date="2015 - 2018"
                            iconStyle={{ background: '#1e1e2c', color: '#fff' }}
                            icon={<MdWork />}
                        >
                            <h3 className="vertical-timeline-element-title">Rana Account Servies</h3>
                            <h4 className="vertical-timeline-element-subtitle">Web Developer</h4>
                            <p>
                                Creative Direction, User Experience, Visual Design, Project Management, Team Leading
                            </p>
                        </VerticalTimelineElement>
                    </VerticalTimeline>
                </div>
            </div>
        </>
    )
}

export default WorkExp