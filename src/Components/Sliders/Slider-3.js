import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import { FaStar, FaRegStar, FaRegHeart } from "react-icons/fa";
import { IoCartOutline, IoSearchOutline } from "react-icons/io5";

const Slider3 = () => {
    const tss = {
        responsive: {
            0: {
                items: 2,
            },
            767: {
                items: 3,
            },
            992: {
                items: 4,
            }

        },
        margin: 10,
        loop: true,
        nav: true,
        navText: ['<i class="fa-solid fa-chevron-left"></i>', '<i class="fa-solid fa-chevron-right"></i>']
    }
    return (
        <>
            <section className="top-seller spaceY">
                <div className="container-fluid container-xxl">
                    <div className="main-box">
                        <h2 className="section-title text-center m-0"
                            data-aos="fade-up"
                            data-aos-duration="800">
                            Top Seller
                        </h2>
                        <div className="ts-slider">
                            <OwlCarousel id='slider3' {...tss} className='slider-2-3-4-cs'>

                                <div className="box"
                                    data-aos="fade-up"
                                    data-aos-delay="100"
                                    data-aos-duration="1000">
                                    <div className="img-box">
                                        <a href="/">
                                            <img src={require('../../Assests/d1.jpg')} alt="" />
                                            <img src={require('../../Assests/d11.jpg')} alt="" className='img-2' />
                                        </a>
                                        <div className="three-btn d-none d-lg-flex">
                                            <a href="/">
                                                <div className="black-badge">
                                                    <span className="txt">Add to Wishlist</span>
                                                    <span className="shape"></span>
                                                </div>
                                                <FaRegHeart />
                                            </a>
                                            <a href="/">
                                                <div className="black-badge">
                                                    <span className="txt">Quick Shop</span>
                                                    <span className="shape"></span>
                                                </div>
                                                <IoCartOutline />
                                            </a>
                                            <a href="/">
                                                <div className="black-badge">
                                                    <span className="txt">Quick View</span>
                                                    <span className="shape"></span>
                                                </div>
                                                <IoSearchOutline />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="text-part">
                                        <div className="show-three-btn d-none d-md-flex d-lg-none">
                                            <a href="/"><FaRegHeart /></a>
                                            <a href="/"><IoCartOutline /></a>
                                            <a href="/"><IoSearchOutline /></a>
                                        </div>
                                        <div className="p-name mt-2 mt-lg-0">
                                            <a href="/">Long Sleeve Top Black</a>
                                        </div>
                                        <div className="p-price">
                                            <span>Rs. 3,400.00</span>
                                        </div>
                                        <div className="p-review">
                                            <span><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></span>
                                        </div>
                                    </div>
                                </div>

                                <div className="box"
                                    data-aos="fade-up"
                                    data-aos-delay="200"
                                    data-aos-duration="1000">
                                    <div className="img-box">
                                        <a href="/">
                                            <img src={require('../../Assests/d2.jpg')} alt="" />
                                            <img src={require('../../Assests/d22.jpg')} alt="" className='img-2' />
                                        </a>
                                        <div className="three-btn d-none d-lg-flex">
                                            <a href="/">
                                                <div className="black-badge">
                                                    <span className="txt">Add to Wishlist</span>
                                                    <span className="shape"></span>
                                                </div>
                                                <FaRegHeart />
                                            </a>
                                            <a href="/">
                                                <div className="black-badge">
                                                    <span className="txt">Quick Shop</span>
                                                    <span className="shape"></span>
                                                </div>
                                                <IoCartOutline />
                                            </a>
                                            <a href="/">
                                                <div className="black-badge">
                                                    <span className="txt">Quick View</span>
                                                    <span className="shape"></span>
                                                </div>
                                                <IoSearchOutline />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="text-part">
                                        <div className="show-three-btn d-none d-md-flex d-lg-none">
                                            <a href="/"><FaRegHeart /></a>
                                            <a href="/"><IoCartOutline /></a>
                                            <a href="/"><IoSearchOutline /></a>
                                        </div>
                                        <div className="p-name mt-2 mt-lg-0">
                                            <a href="/">High Heek Black Sandal</a>
                                        </div>
                                        <div className="p-price">
                                            <span>Rs. 10,200.00</span>
                                        </div>
                                        <div className="p-review">
                                            <span><FaRegStar className="blank-star" /><FaRegStar className="blank-star" /><FaRegStar className="blank-star" /><FaRegStar className="blank-star" /><FaRegStar className="blank-star" /></span>
                                        </div>
                                    </div>
                                </div>

                                <div className="box"
                                    data-aos="fade-up"
                                    data-aos-delay="300"
                                    data-aos-duration="1000">
                                    <div className="img-box">
                                        <a href="/">
                                            <img src={require('../../Assests/d3.jpg')} alt="" />
                                            <img src={require('../../Assests/d33.jpg')} alt="" className='img-2' />
                                        </a>
                                        <div className="three-btn d-none d-lg-flex">
                                            <a href="/">
                                                <div className="black-badge">
                                                    <span className="txt">Add to Wishlist</span>
                                                    <span className="shape"></span>
                                                </div>
                                                <FaRegHeart />
                                            </a>
                                            <a href="/">
                                                <div className="black-badge">
                                                    <span className="txt">Quick Shop</span>
                                                    <span className="shape"></span>
                                                </div>
                                                <IoCartOutline />
                                            </a>
                                            <a href="/">
                                                <div className="black-badge">
                                                    <span className="txt">Quick View</span>
                                                    <span className="shape"></span>
                                                </div>
                                                <IoSearchOutline />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="text-part">
                                        <div className="show-three-btn d-none d-md-flex d-lg-none">
                                            <a href="/"><FaRegHeart /></a>
                                            <a href="/"><IoCartOutline /></a>
                                            <a href="/"><IoSearchOutline /></a>
                                        </div>
                                        <div className="p-name mt-2 mt-lg-0">
                                            <a href="/">Zip-Up Sweatshirt with Hoot</a>
                                        </div>
                                        <div className="p-price">
                                            <span>Rs. 6,800.00</span>
                                        </div>
                                        <div className="p-review">
                                            <span><FaRegStar className="blank-star" /><FaRegStar className="blank-star" /><FaRegStar className="blank-star" /><FaRegStar className="blank-star" /><FaRegStar className="blank-star" /></span>
                                        </div>
                                    </div>
                                </div>

                                <div className="box"
                                    data-aos="fade-up"
                                    data-aos-delay="400"
                                    data-aos-duration="1000">
                                    <div className="img-box">
                                        <a href="/">
                                            <img src={require('../../Assests/d4.jpg')} alt="" />
                                            <img src={require('../../Assests/d44.jpg')} alt="" className='img-2' />
                                        </a>
                                        <div className="three-btn d-none d-lg-flex">
                                            <a href="/">
                                                <div className="black-badge">
                                                    <span className="txt">Add to Wishlist</span>
                                                    <span className="shape"></span>
                                                </div>
                                                <FaRegHeart />
                                            </a>
                                            <a href="/">
                                                <div className="black-badge">
                                                    <span className="txt">Quick Shop</span>
                                                    <span className="shape"></span>
                                                </div>
                                                <IoCartOutline />
                                            </a>
                                            <a href="/">
                                                <div className="black-badge">
                                                    <span className="txt">Quick View</span>
                                                    <span className="shape"></span>
                                                </div>
                                                <IoSearchOutline />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="text-part">
                                        <div className="show-three-btn d-none d-md-flex d-lg-none">
                                            <a href="/"><FaRegHeart /></a>
                                            <a href="/"><IoCartOutline /></a>
                                            <a href="/"><IoSearchOutline /></a>
                                        </div>
                                        <div className="p-name mt-2 mt-lg-0">
                                            <a href="/">Lula Multicolor Long Dress</a>
                                        </div>
                                        <div className="p-price">
                                            <span>Rs. 7,600.00</span>
                                        </div>
                                        <div className="p-review">
                                            <span><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></span>
                                        </div>
                                    </div>
                                </div>

                                {/* Copy Boxes */}
                                <div className="box"
                                    data-aos="fade-up"
                                    data-aos-delay="100"
                                    data-aos-duration="1000">
                                    <div className="img-box">
                                        <a href="/">
                                            <img src={require('../../Assests/d1.jpg')} alt="" />
                                            <img src={require('../../Assests/d11.jpg')} alt="" className='img-2' />
                                        </a>
                                        <div className="three-btn d-none d-lg-flex">
                                            <a href="/">
                                                <div className="black-badge">
                                                    <span className="txt">Add to Wishlist</span>
                                                    <span className="shape"></span>
                                                </div>
                                                <FaRegHeart />
                                            </a>
                                            <a href="/">
                                                <div className="black-badge">
                                                    <span className="txt">Quick Shop</span>
                                                    <span className="shape"></span>
                                                </div>
                                                <IoCartOutline />
                                            </a>
                                            <a href="/">
                                                <div className="black-badge">
                                                    <span className="txt">Quick View</span>
                                                    <span className="shape"></span>
                                                </div>
                                                <IoSearchOutline />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="text-part">
                                        <div className="show-three-btn d-none d-md-flex d-lg-none">
                                            <a href="/"><FaRegHeart /></a>
                                            <a href="/"><IoCartOutline /></a>
                                            <a href="/"><IoSearchOutline /></a>
                                        </div>
                                        <div className="p-name mt-2 mt-lg-0">
                                            <a href="/">Long Sleeve Top Black</a>
                                        </div>
                                        <div className="p-price">
                                            <span>Rs. 3,400.00</span>
                                        </div>
                                        <div className="p-review">
                                            <span><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></span>
                                        </div>
                                    </div>
                                </div>

                                <div className="box"
                                    data-aos="fade-up"
                                    data-aos-delay="200"
                                    data-aos-duration="1000">
                                    <div className="img-box">
                                        <a href="/">
                                            <img src={require('../../Assests/d2.jpg')} alt="" />
                                            <img src={require('../../Assests/d22.jpg')} alt="" className='img-2' />
                                        </a>
                                        <div className="three-btn d-none d-lg-flex">
                                            <a href="/">
                                                <div className="black-badge">
                                                    <span className="txt">Add to Wishlist</span>
                                                    <span className="shape"></span>
                                                </div>
                                                <FaRegHeart />
                                            </a>
                                            <a href="/">
                                                <div className="black-badge">
                                                    <span className="txt">Quick Shop</span>
                                                    <span className="shape"></span>
                                                </div>
                                                <IoCartOutline />
                                            </a>
                                            <a href="/">
                                                <div className="black-badge">
                                                    <span className="txt">Quick View</span>
                                                    <span className="shape"></span>
                                                </div>
                                                <IoSearchOutline />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="text-part">
                                        <div className="show-three-btn d-none d-md-flex d-lg-none">
                                            <a href="/"><FaRegHeart /></a>
                                            <a href="/"><IoCartOutline /></a>
                                            <a href="/"><IoSearchOutline /></a>
                                        </div>
                                        <div className="p-name mt-2 mt-lg-0">
                                            <a href="/">High Heek Black Sandal</a>
                                        </div>
                                        <div className="p-price">
                                            <span>Rs. 10,200.00</span>
                                        </div>
                                        <div className="p-review">
                                            <span><FaRegStar className="blank-star" /><FaRegStar className="blank-star" /><FaRegStar className="blank-star" /><FaRegStar className="blank-star" /><FaRegStar className="blank-star" /></span>
                                        </div>
                                    </div>
                                </div>

                                <div className="box"
                                    data-aos="fade-up"
                                    data-aos-delay="300"
                                    data-aos-duration="1000">
                                    <div className="img-box">
                                        <a href="/">
                                            <img src={require('../../Assests/d3.jpg')} alt="" />
                                            <img src={require('../../Assests/d33.jpg')} alt="" className='img-2' />
                                        </a>
                                        <div className="three-btn d-none d-lg-flex">
                                            <a href="/">
                                                <div className="black-badge">
                                                    <span className="txt">Add to Wishlist</span>
                                                    <span className="shape"></span>
                                                </div>
                                                <FaRegHeart />
                                            </a>
                                            <a href="/">
                                                <div className="black-badge">
                                                    <span className="txt">Quick Shop</span>
                                                    <span className="shape"></span>
                                                </div>
                                                <IoCartOutline />
                                            </a>
                                            <a href="/">
                                                <div className="black-badge">
                                                    <span className="txt">Quick View</span>
                                                    <span className="shape"></span>
                                                </div>
                                                <IoSearchOutline />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="text-part">
                                        <div className="show-three-btn d-none d-md-flex d-lg-none">
                                            <a href="/"><FaRegHeart /></a>
                                            <a href="/"><IoCartOutline /></a>
                                            <a href="/"><IoSearchOutline /></a>
                                        </div>
                                        <div className="p-name mt-2 mt-lg-0">
                                            <a href="/">Zip-Up Sweatshirt with Hoot</a>
                                        </div>
                                        <div className="p-price">
                                            <span>Rs. 6,800.00</span>
                                        </div>
                                        <div className="p-review">
                                            <span><FaRegStar className="blank-star" /><FaRegStar className="blank-star" /><FaRegStar className="blank-star" /><FaRegStar className="blank-star" /><FaRegStar className="blank-star" /></span>
                                        </div>
                                    </div>
                                </div>

                                <div className="box"
                                    data-aos="fade-up"
                                    data-aos-delay="400"
                                    data-aos-duration="1000">
                                    <div className="img-box">
                                        <a href="/">
                                            <img src={require('../../Assests/d4.jpg')} alt="" />
                                            <img src={require('../../Assests/d44.jpg')} alt="" className='img-2' />
                                        </a>
                                        <div className="three-btn d-none d-lg-flex">
                                            <a href="/">
                                                <div className="black-badge">
                                                    <span className="txt">Add to Wishlist</span>
                                                    <span className="shape"></span>
                                                </div>
                                                <FaRegHeart />
                                            </a>
                                            <a href="/">
                                                <div className="black-badge">
                                                    <span className="txt">Quick Shop</span>
                                                    <span className="shape"></span>
                                                </div>
                                                <IoCartOutline />
                                            </a>
                                            <a href="/">
                                                <div className="black-badge">
                                                    <span className="txt">Quick View</span>
                                                    <span className="shape"></span>
                                                </div>
                                                <IoSearchOutline />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="text-part">
                                        <div className="show-three-btn d-none d-md-flex d-lg-none">
                                            <a href="/"><FaRegHeart /></a>
                                            <a href="/"><IoCartOutline /></a>
                                            <a href="/"><IoSearchOutline /></a>
                                        </div>
                                        <div className="p-name mt-2 mt-lg-0">
                                            <a href="/">Lula Multicolor Long Dress</a>
                                        </div>
                                        <div className="p-price">
                                            <span>Rs. 7,600.00</span>
                                        </div>
                                        <div className="p-review">
                                            <span><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></span>
                                        </div>
                                    </div>
                                </div>
                            </OwlCarousel>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Slider3;