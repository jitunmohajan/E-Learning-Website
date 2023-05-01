import React from 'react';
import './Footer.css'
import { FaFacebook, FaGithub, FaTwitter } from "react-icons/fa";
const Footer = () => {
    return (
       

        <div className=" footer-set page-footer font-small blue pt-4 pb-5 mt-5">
                <div className="container-fluid text-center text-md-left">
                    <div className="row">
                        <div className=" mt-md-0 mt-3">
                            <h3 className="text-uppercase mx-auto">E-Learning</h3>
                            <p>Learn and explore new technologies with new tools tech tools</p>
                        </div>

                        <hr className="clearfix w-100 d-md-none pb-0"/>
                    </div>
                </div>

                <div className=''>
                    <h5 className='text-center'>Social Media</h5>
                        <div className='d-flex justify-content-center font'>
                            <FaFacebook></FaFacebook>
                            <FaGithub></FaGithub>
                            <FaTwitter></FaTwitter>
                        </div>
                </div>

                <div className="footer-copyright text-center py-3">© 2022 Copyright:
                    <a href="https://jitunmohajan.github.io/">Jitun Mohajan</a>
                </div>

        </div>

    );
};

export default Footer;