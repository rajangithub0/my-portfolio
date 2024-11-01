import React from 'react';
import './Education.css';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaSchool } from "react-icons/fa6";

const Education = () => {
    return (
        <>
            <div className='container education' id='education'>
                <h2 className='col-12 mt-3 mb-1 text-center text-uppercase'>education Details</h2>
                <hr />
                <VerticalTimeline>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'white', color: 'black' }}
                        contentArrowStyle={{ borderRight: '7px solid  white' }}
                        date="2015 - 2018"
                        iconStyle={{ background: '#138781', color: '#fff' }}
                        icon={<FaSchool />}
                    >
                        <h3 className="vertical-timeline-element-title text-uppercase">punjab techinal university</h3>
                        <h4 className="vertical-timeline-element-subtitle">Bsc.IT</h4>
                        <p>
                            Creative Direction, User Experience, Visual Design, Project Management, Team Leading
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'white', color: 'black' }}
                        contentArrowStyle={{ borderRight: '7px solid  white' }}
                        date="2015 - 2018"
                        iconStyle={{ background: '#138781', color: '#fff' }}
                        icon={<FaSchool />}
                    >
                        <h3 className="vertical-timeline-element-title text-uppercase">punjab techinal university</h3>
                        <h4 className="vertical-timeline-element-subtitle">Bsc.IT</h4>
                        <p>
                            Creative Direction, User Experience, Visual Design, Project Management, Team Leading
                        </p>
                    </VerticalTimelineElement>
                </VerticalTimeline>
            </div>
        </>
    )
}

export default Education