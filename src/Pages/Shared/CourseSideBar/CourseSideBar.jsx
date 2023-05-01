import React from 'react';
import { NavLink } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from 'react-router-dom';

const CourseSideBar = ({courses}) => {
    return (
        <Card className='mt-5' style={{ width: '18rem' }}>
            <Card.Title className='mx-auto text-primary text-bold pt-3 pb-3'>Courses</Card.Title>
            <ListGroup className='pt-4' variant="flush">
                {
                    courses.map(course =><p className='ms-5' key={course._id}>
                        <Link to={`/courses/${course._id}`}>{course.title}</Link>
                    </p>)
                }
            </ListGroup>
        </Card>
    );
};

export default CourseSideBar;