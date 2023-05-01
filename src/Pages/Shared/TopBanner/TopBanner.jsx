import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

import bg1 from '../../../assets/bg-1.jpg';
import bg2 from '../../../assets/bg-2.jpg';
const TopBanner = () => {
    return (
       <div className=''>
            <Carousel fade>
                <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={bg1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={bg2}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
                </Carousel.Item>
                
            </Carousel>
       </div>
    );
};

export default TopBanner;