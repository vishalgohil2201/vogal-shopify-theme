import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import Accordion from 'react-bootstrap/Accordion';

const Footer = () => {
    return (
        <>
            <footer className='spaceY'>
                <div className="container-fluid container-xxl">
                    <div className="top-footer mb-5">
                        <div className="main-box d-md-flex flex-md-wrap">
                            <div className="col-12 col-md-6 col-lg-30 px-2 px-lg-3 mb-md-5 mb-lg-0">
                                <div className="box-1 box">
                                    <div className="img-logo">
                                        <img src={require('../../Assests/logo-dark.png')} alt="" />
                                    </div>
                                    <div className="paragraph">
                                        <p>
                                            Ut enim ad minim veniam, quis nostrud
                                            <br></br>
                                            exercitation laboris nisi ut aliquip ex ea
                                            <br></br>
                                            commodo consequat.Ut enim ad minim
                                            <br></br>
                                            veniam,quis nostrud exercitation
                                        </p>
                                    </div>
                                    <h4>KEEP IN TOUCH</h4>
                                    <div className="social-icon">
                                        <a href="/"><FaFacebookF></FaFacebookF></a>
                                        <a href="/"><FaTwitter></FaTwitter></a>
                                        <a href="/"><FaInstagram></FaInstagram></a>
                                        <a href="/"><FaYoutube></FaYoutube></a>
                                    </div>
                                </div>
                            </div>

                            <div className="accordion-box box d-md-none">
                                <Accordion>
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>INFORMATION</Accordion.Header>
                                        <Accordion.Body>
                                            <ul>
                                                <li>Latest News</li>
                                                <li>Career</li>
                                                <li>My Account</li>
                                                <li>My Cart</li>
                                                <li>Orders and Returns</li>
                                                <li>Contact Us</li>
                                            </ul>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="1">
                                        <Accordion.Header>CUSTOMER SERVICES</Accordion.Header>
                                        <Accordion.Body>
                                            <ul>
                                                <li>Privacy Policy</li>
                                                <li>Terms & Conditions</li>
                                                <li>Shipping & Returns</li>
                                                <li>Help & FAQs</li>
                                                <li>Refund Policy</li>
                                                <li>Customer Service</li>
                                            </ul>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </div>

                            {/* Box 2 */}
                            <div className="col-12 col-md-6 col-lg-20 d-none d-md-block px-2 px-lg-3 mb-5 mb-lg-0">
                                <div className="box-2-3">
                                    <h4>INFORMATION</h4>
                                    <ul>
                                        <li><a href="/">Latest News</a></li>
                                        <li><a href="/">Career</a></li>
                                        <li><a href="/">My Account</a></li>
                                        <li><a href="/">My Cart</a></li>
                                        <li><a href="/">Orders and Returns</a></li>
                                        <li><a href="/">Contact Us</a></li>
                                    </ul>
                                </div>
                            </div>

                            {/* Box 3 */}
                            <div className="col-12 col-md-6 col-lg-20 d-none d-md-block px-2 px-lg-3 mb-5 mb-lg-0">
                                <div className="box-2-3">
                                    <h4>CUSTOMER SERVICE</h4>
                                    <ul>
                                        <li><a href="/">Privacy Policy</a></li>
                                        <li><a href="/">Terms and Conditions</a></li>
                                        <li><a href="/">Shipping and Returns</a></li>
                                        <li><a href="/">Help and FAQs</a></li>
                                        <li><a href="/">Refund Policy</a></li>
                                        <li><a href="/">Customer Service</a></li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-12 col-md-6 col-lg-30 px-2 px-lg-3 mb-md-5 mb-lg-0">
                                <div className="box-4 box">
                                    <div className="text-part">
                                        <h4>NEWSLETTER</h4>
                                        <p>
                                            Enter your email to receive daily news and get 20%
                                            <br></br>
                                            off coupon for all items. NO spam, we promise
                                        </p>
                                    </div>
                                    <div className="text-box d-flex">
                                        <div className="email-box"><input type="text" placeholder="Email Address" className="w-100" /></div>
                                        <div className="subs-btn"><button className="w-100">SUBSCRIBE</button></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bottom-footer d-md-flex justify-content-between px-3">
                        <div className="copyright text-center mb-2 mb-md-0">
                            <p className="m-0">© 2023,Vogal. All Rights Reserved.</p>
                        </div>
                        <div className="payment-icon d-flex justify-content-center">
                            <div className="icon-box">
                                <img src={require('../../Assests/amex.png')} alt="" />
                            </div>
                            <div className="icon-box">
                                <img src={require('../../Assests/discover.png')} alt="" />
                            </div>
                            <div className="icon-box">
                                <img src={require('../../Assests/google-pay.png')} alt="" />
                            </div>
                            <div className="icon-box">
                                <img src={require('../../Assests/visa.png')} alt="" />
                            </div>
                            <div className="icon-box">
                                <img src={require('../../Assests/apple-pay.png')} alt="" />
                            </div>
                        </div>
                    </div>


                </div>
            </footer>
        </>
    )
}

export default Footer;