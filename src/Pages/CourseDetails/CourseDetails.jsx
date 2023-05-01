import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const CourseDetails = () => {
    const course = useLoaderData();
    console.log(course);
    return (
        <div className='mt-5'>
            <div className=''>
                <h3 className='text-center text-primary'>{course.title}</h3>
                <Card className='shadow-lg me-3 p-3 mb-5 w-100' style={{ width: '18rem' }}>
                    <Card.Img className='background-color' variant="top" src={course.thumbnail_url} />
                    <Card.Body>
                    <Card.Title>{course.title}</Card.Title>
                    <Card.Text>
                    { course.description }
                    </Card.Text>
                    <p><small>Instuctor: {course.instructor}</small></p>
                    {
                        
                    }
                        <Link to={`/checkout/${course._id}`}><Button variant="primary">Get premium access</Button></Link>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
};

export default CourseDetails;