import React from 'react';
import TopBanner from '../Shared/TopBanner/TopBanner';
import { useLoaderData } from 'react-router-dom';
import CourseTopics from '../Shared/CourseTopics/CourseTopics';


const Home = () => {
    const courses = useLoaderData();
    return (
        <div>
            <TopBanner></TopBanner>
            

            {/* <Container fluid="md" className="mt-5">
                <Row xs={1} md={2} lg={3} g-3>
                {
                    courses.map(course => <Course key={course._id} course={course}></Course>)
                } 
                </Row>
            </Container> */}

            {/* <div className='container'>
                <h2 className='mt-5 mx-auto'><span className='orange'>Programming</span> <span className='text-primary'>Topics</span></h2>
                <Row xs={1} md={2} lg={3} className="mt-5 justify-content-center">
                    
                        {
                            courses.map(course=> <Course key={course._id} course={course}></Course> )
                        }
                        
                </Row>
            </div> */}

            <CourseTopics courses={courses}></CourseTopics>
            

        </div>
    );
};

export default Home;