import { Offcanvas } from 'react-bootstrap'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { hideNavOffset } from '../../Redux/Slices/mobileNavSlice';
import { Link } from 'react-router-dom';

const MobileHeader = () => {

    const handleShow = useSelector((state) => state.navSlice.nav);
    const dispatch = useDispatch();
    const hideOffcanvas = () => {
        dispatch(hideNavOffset());
    }
    return (
        <>
            <Offcanvas show={handleShow} onHide={() => hideOffcanvas()} className='mobile-nav'>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>
                        <img src={require('../../Assests/logo-dark.png')} alt="" />
                    </Offcanvas.Title>
                </Offcanvas.Header>
                <hr className='mt-2 mb-0' />
                <Offcanvas.Body>
                    <ul className='main-menu'>
                        <li>
                            <Link>
                                HOME
                            </Link>
                        </li>
                        <li>
                            <Link>
                                SHOP
                            </Link>
                        </li>
                        <li>
                            <Link>
                                PRODUCTS
                            </Link>
                        </li>
                        <li>
                            <Link>
                                DEAL ZONE
                            </Link>
                        </li>
                        <li>
                            <Link>
                                PAGES
                            </Link>
                        </li>
                        <li>
                            <Link>
                                BLOG
                            </Link>
                        </li>
                        <li>
                            <Link>
                                BUY NOW
                            </Link>
                        </li>
                    </ul>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    )
}

export default MobileHeader
