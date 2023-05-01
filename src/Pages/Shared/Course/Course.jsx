import React from 'react';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
const Course = ({course}) => {
    return (
        <Col>
            <Card className='shadow-lg me-3 p-3 mb-5' style={{ width: '18rem' }}>
                <Card.Img className='background-color' variant="top" src={course.thumbnail_url} />
                <Card.Body>
                <Card.Title>{course.title}</Card.Title>
                <Card.Text>
                { course.description.slice(0,50) }
                </Card.Text>
                <p><small>Instuctor: {course.instructor}</small></p>
                
                <Link to={`/courses/${course._id}`}><Button variant="primary">Course Details</Button></Link>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Course;