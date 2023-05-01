import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Accordion from 'react-bootstrap/Accordion';

const CheckOut = () => {
    const outlines= useLoaderData();
    console.log(outlines);
    return (
        <div className='container'>
            <h4 className='text-primary text-center mt-5 mb-3'>Course Outlines</h4>
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
        </div>
    );
};

export default CheckOut;