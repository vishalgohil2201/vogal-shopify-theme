import React from "react";
import { GoChevronDown } from "react-icons/go";

import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container'
import Dropdown from 'react-bootstrap/Dropdown';

// var n = 0;
// const demo = () => {
//     if (n == 0) {
//         document.getElementById('subMenu').style.opacity = '1';
//         document.getElementById('subMenu').style.visibility = 'visible';
//         n = 1;
//     }
//     else {
//         document.getElementById('subMenu').style.opacity = '0';
//         document.getElementById('subMenu').style.visibility = 'hidden';
//         n = 0;
//     }

// }

function TopInfo() {

    return (
        <>
            <section className="top-info">
                <Container>
                    <div className="main-box d-flex justify-content-center justify-content-lg-between align-items-center">
                        <div className="d-none d-lg-block">
                            AVAILABLE 24/7 AT +566 4444 9940
                        </div>
                        <div className="text-center mx-lg-0">
                            FREE DELIVERY ON ORDERS OVER $120. DON’T MISS.
                        </div>
                        <div className="right-box d-none d-lg-block">
                            <div className="language-rupees d-flex">

                                <Dropdown className="dropdown-1 me-3">
                                    <Dropdown.Toggle variant="success" id="dropdown-basic" className="btn d-flex align-items-center">
                                        <img src={require('../../Assests/en.jpg')} alt="" /><span>ENGLISH</span><GoChevronDown className="down-arrow" />
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu className="ti-sub-menu">
                                        <Dropdown.Item href="#"><img src={require('../../Assests/en.jpg')} alt="" /><span>english</span></Dropdown.Item>
                                        <Dropdown.Item href="#"><img src={require('../../Assests/fr.jpg')} alt="" /><span>Français</span></Dropdown.Item>
                                        <Dropdown.Item href="#"><img src={require('../../Assests/de.jpg')} alt="" /><span>Deutsch</span></Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>

                                <Dropdown className="dropdown-2">
                                    <Dropdown.Toggle variant="success" id="dropdown-basic" className="btn d-flex align-items-center">
                                        <span>INR ₹</span><GoChevronDown className="down-arrow" />
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu className="ti-sub-menu">
                                        <Dropdown.Item href="#"><span>AUD $</span></Dropdown.Item>
                                        <Dropdown.Item href="#"><span>CNY ¥</span></Dropdown.Item>
                                        <Dropdown.Item href="#"><span>EURO €</span></Dropdown.Item>
                                        <Dropdown.Item href="#"><span>GBP £</span></Dropdown.Item>
                                        <Dropdown.Item href="#"><span>INR ₹</span></Dropdown.Item>
                                        <Dropdown.Item href="#"><span>USD $</span></Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>

                            </div>
                        </div>
                    </div>
                </Container>
            </section>

        </>
    )
}

export default TopInfo;