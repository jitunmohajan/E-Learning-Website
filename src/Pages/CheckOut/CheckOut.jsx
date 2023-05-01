import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';

const CheckOut = () => {
    const course= useLoaderData();
    const outlines = course.outlines;
    // console.log(outlines);
    return (
        <div className='container'>
            <h4 className='text-primary  mt-5 mb-3'>{course.title}</h4>
            <h5 className='text-center mt-5 mb-3'>Course Outlines</h5>
            <Accordion defaultActiveKey="0">
            {
                outlines.map((outline,indx) => 
                <>
                    <Accordion.Item eventKey={indx}>
                        <Accordion.Header>{outline.title}</Accordion.Header>
                        <Accordion.Body>
                            {outline.description}
                        </Accordion.Body>
                    </Accordion.Item>
                </>)
            }
           
            </Accordion>

            <div className='mx-auto'>
                <Button className='mt-5' variant="primary">Check out</Button>
            </div>
        </div>
    );
};

export default CheckOut;