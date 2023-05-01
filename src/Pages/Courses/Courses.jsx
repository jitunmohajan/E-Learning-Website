import React from 'react';
import CourseSideBar from '../Shared/CourseSideBar/CourseSideBar';
import { Row, Col, Container } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import CourseTopics from '../Shared/CourseTopics/CourseTopics';


const Courses = () => {
    const courses = useLoaderData();
    return (
        <div>
            {/* <CourseSideBar></CourseSideBar> */}
            {/* <Container> */}
                <Row>
                    <Col lg={3}>
                        <CourseSideBar courses={courses}></CourseSideBar>
                    </Col>
                    <Col lg={9}>
                        <CourseTopics courses={courses}> </CourseTopics>
                    </Col>
                </Row>
            {/* </Container> */}
            
        </div>
    );
};

export default Courses;