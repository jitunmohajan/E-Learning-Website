import React from 'react';
import Row from 'react-bootstrap/Row';
import Course from '../Course/Course';
const CourseTopics = ({courses}) => {
    return (
        <div>

            <div className='container'>
                <h2 className='mt-5 mx-auto'><span className='orange'>Programming</span> <span className='text-primary'>Topics</span></h2>
                <Row xs={1} md={2} lg={3} className="mt-5 justify-content-center">
                    
                        {
                            courses.map(course=> <Course key={course._id} course={course}></Course> )
                        }
                        
                </Row>
            </div>
            
        </div>
    );
};

export default CourseTopics;