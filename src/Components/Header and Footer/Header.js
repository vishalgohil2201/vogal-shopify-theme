import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Container from 'react-bootstrap/Container';
import { CgSearch } from "react-icons/cg";
import { FiUser } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa6";
import { IoCartOutline } from "react-icons/io5";
import { HiMiniBars3 } from "react-icons/hi2";
import { BsChevronRight } from "react-icons/bs";

// Routing
import { Link, NavLink } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { showNavOffset } from '../../Redux/Slices/mobileNavSlice';


const Header = () => {

    const dispatch = useDispatch();

    const showOffcanvas = () => {
        dispatch(showNavOffset());
    }

    return (
        <>
            <header className='py-2 py-lg-0'>
                <div className='container-fluid container-lg'>
                    <div className="main position-relative d-flex align-items-center justify-content-between">
                        <div className="mobilemenu-and-h-logo d-flex align-items-center">
                            {/* Mobile Nav Menu */}
                            <div className="mobile-menu d-lg-none">
                                <a href='/' onClick={() => showOffcanvas()}>
                                    <HiMiniBars3 />
                                </a>
                            </div>
                            <div className="h-logo">
                                <Link to='/'>
                                    <img src={require('../../Assests/logo-dark.png')} alt="" />
                                </Link>
                            </div>

                        </div>
                        <div className="menus d-none d-lg-block">
                            <ul className="main-menu d-flex m-0 p-0">
                                <li className='home'>
                                    <NavLink className='fw-500 text-dark' to='/'>
                                        HOME
                                    </NavLink>
                                </li>
                                <li>
                                    <a href='/' className='fw-500 text-dark'>SHOP</a>
                                    {/* Mega Menu 2 */}
                                    <div id='show-menu2' className="mega-menu mega-menu-2-3 d-flex">
                                        <ul className='left-menu-part d-flex'>
                                            <li className='box col-3 px-3'>
                                                <ul>
                                                    <li><a href='/' className='fw-500 text-dark'>COLLECTION LIST</a></li>
                                                    <li><a href='/'>Collection List 1</a></li>
                                                    <li><a href='/'>Collection List 2</a></li>
                                                    <li><a href='/'>Collection List 3</a></li>
                                                    <li><a href='/'>Collection List 4</a></li>
                                                    <li><a href='/'>Collection List 5</a></li>
                                                    <li><a href='/'>Sub Collection 1</a></li>
                                                    <li><a href='/'>Sub Collection 2</a></li>
                                                    <li><a href='/'>Sub Collection 3</a></li>
                                                    <li><a href='/'>Sub Collection 4</a></li>
                                                </ul>
                                            </li>
                                            <li className='box col-3 px-3'>
                                                <ul>
                                                    <li><a href='/' className='fw-500 text-dark'>SHOP PAGES</a></li>
                                                    <li><a href='/'>Left Sidebar</a></li>
                                                    <li><a href='/'>Right Sidebar</a></li>
                                                    <li><a href='/'>Drawer Sidebar</a></li>
                                                    <li><a href='/'>No Filters/Sidebar</a></li>
                                                    <li><a href='/'>Full Width</a></li>
                                                    <li><a href='/'>Horizontal Filter</a></li>
                                                    <li><a href='/'>Categories Menu</a></li>
                                                    <li><a href='/'>List View</a></li>
                                                </ul>
                                            </li>
                                            <li className='box col-3 px-3'>
                                                <ul>
                                                    <li><a href='/' className='fw-500 text-dark'>MAIN FEATURES</a></li>
                                                    <li><a href='/'>Dynamic Filters</a></li>
                                                    <li><a href='/'>Header Image</a></li>
                                                    <li><a href='/'>Header Simple</a></li>
                                                    <li><a href='/'>Header Overlap</a></li>
                                                    <li><a href='/'>Banner Countdown</a></li>
                                                    <li><a href='/'>Background Color</a></li>
                                                    <li><a href='/'>Banner Description</a></li>
                                                    <li><a href='/'>Collection Description</a></li>
                                                </ul>
                                            </li>
                                            <li className='box col-3 px-3'>
                                                <ul>
                                                    <li><a href='/' className='fw-500 text-dark'>MAIN FEATURES</a></li>
                                                    <li><a href='/'>Sidebar Background</a></li>
                                                    <li><a href='/'>Pagination</a></li>
                                                    <li><a href='/'>Ajax Load More</a></li>
                                                    <li><a href='/'>Infinite Scroll</a></li>
                                                    <li><a href='/'>Swatches Style</a></li>
                                                    <li><a href='/'>Grid Style</a></li>
                                                    <li><a href='/'>Custom Content</a></li>
                                                    <li><a href='/'>Custom Content</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                        <div className='right-img-part mb-3'>
                                            <div className='mm-2-img ps-2'>
                                                <a href='/' className='p-0 text-center'>
                                                    <img src={require('../../Assests/mmmodern-3.jpg')} className='mb-3' alt="" />
                                                    <span className='fw-500'>SPRING SUMMER</span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <a href='/' className='fw-500 text-dark'>PRODUCTS</a>
                                    {/* Mega Menu 3 */}
                                    <div className="mega-menu mega-menu-2-3 d-flex" id='show-menu3'>
                                        <ul className='left-menu-part d-flex'>
                                            <li className='box col-3 px-3'>
                                                <ul>
                                                    <li><a href='/' className='fw-500 text-dark'>PRODUCT PAGES</a></li>
                                                    <li><a href='/'>Grid 2 Column</a></li>
                                                    <li><a href='/'>Grid 1 Column</a></li>
                                                    <li><a href='/'>Grid Gallery</a></li>
                                                    <li><a href='/'>Left thumbnails</a></li>
                                                    <li><a href='/'>Right thumbnails</a></li>
                                                    <li><a href='/'>Bottom thumbnails</a></li>
                                                    <li><a href='/'>Vertical Slider</a></li>
                                                    <li><a href='/'>Product Fullwidth</a></li>
                                                    <li><a href='/'>Product 3D, AR models</a></li>
                                                </ul>
                                            </li>
                                            <li className='box col-3 px-3'>
                                                <ul>
                                                    <li><a href='/' className='fw-500 text-dark'>PRODUCT FEATURES</a></li>
                                                    <li><a href='/'>Lghtbox Images</a></li>
                                                    <li><a href='/'>Product Inner Zoom</a></li>
                                                    <li><a href='/'>Video Thumb</a></li>
                                                    <li><a href='/'>Color Swatch</a></li>
                                                    <li><a href='/'>Image Swatch</a></li>
                                                    <li><a href='/'>Dropdown Swatch</a></li>
                                                    <li><a href='/'>Label Swatch</a></li>
                                                    <li><a href='/'>Swatches Style</a></li>
                                                    <li><a href='/'>More Style</a></li>
                                                </ul>
                                            </li>
                                            <li className='box col-3 px-3'>
                                                <ul>
                                                    <li><a href='/' className='fw-500 text-dark'>PRODUCT FEATURES</a></li>
                                                    <li><a href='/'>Upsell - Bundle</a></li>
                                                    <li><a href='/'>Product Inquiry</a></li>
                                                    <li><a href='/'>Sticky Add To Cart</a></li>
                                                    <li><a href='/'>Pre - Order</a></li>
                                                    <li><a href='/'>Product Pick Up</a></li>
                                                    <li><a href='/'>Group Product</a></li>
                                                    <li><a href='/'>Product Tabs Left</a></li>
                                                    <li><a href='/'>Product Tabs Center</a></li>
                                                    <li><a href='/'>Collapsible Tabs</a></li>
                                                    <li><a href='/'>Complementary Products</a></li>
                                                </ul>
                                            </li>
                                            <li className='box col-3 px-3'>
                                                <ul>
                                                    <li><a href='/' className='fw-500 text-dark'>PRODUCT FEATURES</a></li>
                                                    <li><a href='/'>Stock Alert</a></li>
                                                    <li><a href='/'>Countdown</a></li>
                                                    <li><a href='/'>Sales Point</a></li>
                                                    <li><a href='/'>Dynamic Checkout</a></li>
                                                    <li><a href='/'>Sold In Last</a></li>
                                                    <li><a href='/'>Fake Visitors</a></li>
                                                    <li><a href='/'>Short Description</a></li>
                                                    <li><a href='/'>Promotion Text</a></li>
                                                    <li><a href='/'>Featured Text</a></li>
                                                    <li><a href='/'>Custom Text</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                        <div className='right-img-part mb-3'>
                                            <div className='ps-2 mm-3-img'>
                                                <a href='/' className='p-0 text-center d-inline'>
                                                    <img src={require('../../Assests/dm1-mm-img1.jpg')} className='mb-3' alt="" />
                                                </a>
                                            </div>

                                            <div className='ps-2 mm-3-img'>
                                                <a href='/' className='p-0 text-center d-inline'>
                                                    <img src={require('../../Assests/dm2-mm-img2.jpg')} alt="" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </li>

                                <li>
                                    <a href='/' className='fw-500 text-dark'>DEAL ZONE</a>
                                    {/* Mega Menu 5 */}
                                    <div className="mega-menu mega-menu-5" id="show-menu5">
                                        <div className="box d-flex">
                                            <div className="w-20 px-3 mb-3 text-center">
                                                <a href='/'>
                                                    <img src={require('../../Assests/mm1.jpg')} alt="" />
                                                    <span className='fw-500 pt-2'>TOPS & TSHIRTS</span>
                                                </a>
                                            </div>
                                            <div className="w-20 px-3 mb-3 text-center">
                                                <a href='/'>
                                                    <img src={require('../../Assests/mm2.jpg')} alt="" />
                                                    <span className='fw-500 pt-2'>PARTY DRESSES</span>
                                                </a>
                                            </div>
                                            <div className="w-20 px-3 mb-3 text-center">
                                                <a href='/'>
                                                    <img src={require('../../Assests/mm3.jpg')} alt="" />
                                                    <span className='fw-500 pt-2'>SPORTSWEAR</span>
                                                </a>
                                            </div>
                                            <div className="w-20 px-3 mb-3 text-center">
                                                <a href='/'>
                                                    <img src={require('../../Assests/mm4.jpg')} alt="" />
                                                    <span className='fw-500 pt-2'>ACCESSORIES</span>
                                                </a>
                                            </div>
                                            <div className="w-20 px-3 mb-3 text-center">
                                                <a href='/'>
                                                    <img src={require('../../Assests/mm5.jpg')} alt="" />
                                                    <span className='fw-500 pt-2'>SPRING SUMMER</span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className='sub-menu-parent'>
                                    {/* Sub Menu 1 */}
                                    <a href='/' className='fw-500 text-dark'>PAGES</a>
                                    <ul className="sub-menu" id="show-menu6">
                                        <li>
                                            <a href='/' className='d-flex justify-content-between align-items-center'><span>About Us </span><BsChevronRight /></a>
                                            <ul className="peta-menu" id='show-peta-menu1'>
                                                <li><a href='/'>About 1</a></li>
                                                <li><a href='/'>About 2</a></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href='/' className='d-flex justify-content-between align-items-center'><span>Contact Us</span><BsChevronRight /></a>
                                            <ul className="peta-menu" id='show-peta-menu2'>
                                                <li><a href='/'>Contact 1</a></li>
                                                <li><a href='/'>Contact 2</a></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href='/' className='d-flex justify-content-between align-items-center'><span>Portfolio</span> <BsChevronRight /></a>
                                            <ul className="peta-menu" id='show-peta-menu3'>
                                                <li><a href='/'>Portfolio 1</a></li>
                                                <li><a href='/'>Portfolio 2</a></li>
                                                <li><a href='/'>portfolio 3</a></li>
                                                <li><a href='/'>Portfolio 4</a></li>
                                            </ul>
                                        </li>
                                        <li><a href='/'>FAQ's</a></li>
                                        <li><a href='/'>Our Brands</a></li>
                                        <li><a href='/'>My Account</a></li>
                                        <li><a href='/'>Store Locations</a></li>
                                        <li><a href='/'>404</a></li>
                                    </ul>
                                </li>
                                <li className='sub-menu-parent'>
                                    {/* Sub Menu 2 */}
                                    <a href='/' className='fw-500 text-dark'>BLOG</a>
                                    <ul className="sub-menu" id="show-menu7">
                                        <li><a href='/'>Blog Standard</a></li>
                                        <li><a href='/'>Blog Grid</a></li>
                                        <li><a href='/'>Blog List</a></li>
                                        <li><a href='/'>Blog Mask</a></li>
                                        <li><a href='/'>Blog Modern</a></li>
                                        <li><a href='/'>Blog Fullwidth</a></li>
                                        <li><a href='/'>Blog Post</a></li>
                                    </ul>
                                </li>
                                <li className='sub-menu-parent'>
                                    {/* Sub Menu 3 */}
                                    <a href='/' className='fw-500 text-dark'>BUY NOW</a>
                                    <ul className="sub-menu" id="show-menu8">
                                        <li><a href='/'>Open A Store For Free</a></li>
                                        <li><a href='/'>Support Ticket</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        <div className="h-icons">
                            <a href='/'><CgSearch className='icon' /></a>
                            <Link href='/account' to='/account' id="RouterNavLink1"><FiUser className='icon' /></Link>
                            <Link href='/wishlist' to='/wishlist' id="RouterNavLink2"><FaRegHeart className='icon' /></Link>
                            <a href='/' className='cart'><IoCartOutline className='icon' />
                                <b>0</b></a>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header;