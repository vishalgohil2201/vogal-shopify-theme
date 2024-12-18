
import { FaStar, FaRegStar, FaStarHalfAlt, FaRegHeart } from "react-icons/fa";
import { IoCartOutline, IoSearchOutline } from "react-icons/io5";

const Section1 = () => {
    return (
        <>
            <section className="new-arrivals spaceY">
                <div className="container-fluid container-xxl">
                    <div className="main-box">

                        <div className="title-part text-center"
                            data-aos="fade-up"
                            data-aos-duration="800">
                            <h3 className='sttl mb-0'>New Arrivals</h3>
                            <h4 className='sbttl mb-0'>We have you occasion covered</h4>
                        </div>

                        <div className="myrow d-flex flex-wrap">
                            <div className="col-6 col-md-4 col-lg-3 px-1 px-lg-2">
                                <div className="box mb-3 mb-lg-4"
                                    data-aos="fade-up"
                                    data-aos-delay="100"
                                    data-aos-duration="1000">
                                    <div className="img-box">
                                        <a href="/">
                                            <img src={require('../../Assests/c1.jpg')} alt="" />
                                            <img src={require('../../Assests/c11.jpg')} alt="" className="img-2" />
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
                                    <div className="text-part text-center">
                                        <div className="show-three-btn d-none d-md-flex d-lg-none">
                                            <a href="/"><FaRegHeart /></a>
                                            <a href="/"><IoCartOutline /></a>
                                            <a href="/"><IoSearchOutline /></a>
                                        </div>
                                        <div className="p-name mt-2 mt-lg-0">
                                            <a href="/">Everyday Tube Top Ribbed</a>
                                        </div>
                                        <div className="p-price">
                                            <span>Rs. 15,200.00</span>
                                        </div>
                                        <div className="p-review">
                                            <span><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></span>
                                        </div>
                                        <div className="p-color d-flex justify-content-center">
                                            <div className="round-color light-blue"></div>
                                            <div className="round-color sage"></div>
                                            <div className="round-color purple"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 col-md-4 col-lg-3 px-1 px-lg-2">
                                <div className="box mb-3 mb-lg-4"
                                    data-aos="fade-up"
                                    data-aos-delay="200"
                                    data-aos-duration="1000">
                                    <div className="img-box">
                                        <a href="/">
                                            <img src={require('../../Assests/c2.jpg')} alt="" />
                                            <img src={require('../../Assests/c22.jpg')} alt="" className="img-2" />
                                        </a>
                                        <div className="sale-badge sale-clr1">
                                            Best Selling!
                                        </div>
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
                                    <div className="text-part text-center">
                                        <div className="show-three-btn d-none d-md-flex d-lg-none">
                                            <a href="/"><FaRegHeart /></a>
                                            <a href="/"><IoCartOutline /></a>
                                            <a href="/"><IoSearchOutline /></a>
                                        </div>
                                        <div className="p-name mt-2 mt-lg-0">
                                            <a href="/">Long Maxi Dress</a>
                                        </div>
                                        <div className="p-price">
                                            <span>Rs. 6,000.00</span>
                                        </div>
                                        <div className="p-review">
                                            <span><FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalfAlt /></span>
                                        </div>
                                        <div className="p-color d-flex justify-content-center">
                                            <div className="round-color mauve"></div>
                                            <div className="round-color light-blue"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 col-md-4 col-lg-3 px-1 px-lg-2">
                                <div className="box mb-3 mb-lg-4"
                                    data-aos="fade-up"
                                    data-aos-delay="300"
                                    data-aos-duration="1000">
                                    <div className="img-box">
                                        <a href="/">
                                            <img src={require('../../Assests/c3.jpg')} alt="" />
                                            <img src={require('../../Assests/c33.jpg')} alt="" className="img-2" />
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
                                    <div className="text-part text-center">
                                        <div className="show-three-btn d-none d-md-flex d-lg-none">
                                            <a href="/"><FaRegHeart /></a>
                                            <a href="/"><IoCartOutline /></a>
                                            <a href="/"><IoSearchOutline /></a>
                                        </div>
                                        <div className="p-name mt-2 mt-lg-0">
                                            <a href="/">Solid Cargo Pant</a>
                                        </div>
                                        <div className="p-price">
                                            <span>Rs. 7,600.00</span>
                                        </div>
                                        <div className="p-review">
                                            <span><FaStar /><FaStar /><FaStar /><FaStar /><FaRegStar className="blank-star" /></span>
                                        </div>
                                        <div className="p-color d-flex justify-content-center">
                                            <div className="round-color khakhi"></div>
                                            <div className="round-color bg-black"></div>
                                            <div className="round-color red"></div>
                                            <div className="round-color beige"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 col-md-4 col-lg-3 px-1 px-lg-2">
                                <div className="box mb-3 mb-lg-4"
                                    data-aos="fade-up"
                                    data-aos-delay="400"
                                    data-aos-duration="1000">
                                    <div className="img-box">
                                        <a href="/">
                                            <img src={require('../../Assests/c4.jpg')} alt="" />
                                            <img src={require('../../Assests/c44.jpg')} alt="" className="img-2" />
                                        </a>
                                        <div className="sale-badge sale-clr2">
                                            Sale
                                        </div>
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
                                    <div className="text-part text-center">
                                        <div className="show-three-btn d-none d-md-flex d-lg-none">
                                            <a href="/"><FaRegHeart /></a>
                                            <a href="/"><IoCartOutline /></a>
                                            <a href="/"><IoSearchOutline /></a>
                                        </div>
                                        <div className="p-name mt-2 mt-lg-0">
                                            <a href="/">Knee Length Denim Skirts</a>
                                        </div>
                                        <div className="p-price">
                                            <span>Rs. 5,500.00</span>
                                        </div>
                                        <div className="p-review">
                                            <span><FaRegStar className="blank-star" /><FaRegStar className="blank-star" /><FaRegStar className="blank-star" /><FaRegStar className="blank-star" /><FaRegStar className="blank-star" /></span>
                                        </div>
                                        <div className="p-color d-flex justify-content-center">
                                            <div className="round-color orange"></div>
                                            <div className="round-color beige"></div>
                                            <div className="round-color pink"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 col-md-4 col-lg-3 px-1 px-lg-2">
                                <div className="box mb-3 mb-lg-4"
                                    data-aos="fade-up"
                                    data-aos-delay="100"
                                    data-aos-duration="1000">
                                    <div className="img-box">
                                        <a href="/">
                                            <img src={require('../../Assests/c5.jpg')} alt="" />
                                            <img src={require('../../Assests/c55.jpg')} alt="" className="img-2" />
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
                                    <div className="text-part text-center">
                                        <div className="show-three-btn d-none d-md-flex d-lg-none">
                                            <a href="/"><FaRegHeart /></a>
                                            <a href="/"><IoCartOutline /></a>
                                            <a href="/"><IoSearchOutline /></a>
                                        </div>
                                        <div className="p-name mt-2 mt-lg-0">
                                            <a href="/">Crossbody Bag with Chain Strap</a>
                                        </div>
                                        <div className="p-price">
                                            <span>Rs. 11,900.00</span>
                                        </div>
                                        <div className="p-review">
                                            <span><FaRegStar className="blank-star" /><FaRegStar className="blank-star" /><FaRegStar className="blank-star" /><FaRegStar className="blank-star" /><FaRegStar className="blank-star" /></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 col-md-4 col-lg-3 px-1 px-lg-2">
                                <div className="box mb-3 mb-lg-4"
                                    data-aos="fade-up"
                                    data-aos-delay="200"
                                    data-aos-duration="1000">
                                    <div className="img-box">
                                        <a href="/">
                                            <img src={require('../../Assests/c6.jpg')} alt="" />
                                            <img src={require('../../Assests/c66.jpg')} alt="" className="img-2" />
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
                                    <div className="text-part text-center">
                                        <div className="show-three-btn d-none d-md-flex d-lg-none">
                                            <a href="/"><FaRegHeart /></a>
                                            <a href="/"><IoCartOutline /></a>
                                            <a href="/"><IoSearchOutline /></a>
                                        </div>
                                        <div className="p-name mt-2 mt-lg-0">
                                            <a href="/">Toe Slip-On Shoes Black</a>
                                        </div>
                                        <div className="p-price">
                                            <span>Rs. 7,200.00</span>
                                        </div>
                                        <div className="p-review">
                                            <span><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 col-md-4 col-lg-3 px-1 px-lg-2">
                                <div className="box mb-3 mb-lg-4"
                                    data-aos="fade-up"
                                    data-aos-delay="300"
                                    data-aos-duration="1000">
                                    <div className="img-box">
                                        <a href="/">
                                            <img src={require('../../Assests/c7.jpg')} alt="" />
                                            <img src={require('../../Assests/c77.jpg')} alt="" className="img-2" />
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
                                    <div className="text-part text-center">
                                        <div className="show-three-btn d-none d-md-flex d-lg-none">
                                            <a href="/"><FaRegHeart /></a>
                                            <a href="/"><IoCartOutline /></a>
                                            <a href="/"><IoSearchOutline /></a>
                                        </div>
                                        <div className="p-name mt-2 mt-lg-0">
                                            <a href="/">Polo Solid Short Jumpsuits</a>
                                        </div>
                                        <div className="p-price">
                                            <span>Rs. 8,500.00</span>
                                        </div>
                                        <div className="p-review">
                                            <span><FaStar /><FaStar /><FaStar /><FaStar /><FaRegStar className="blank-star" /></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 col-md-4 col-lg-3 px-1 px-lg-2">
                                <div className="box mb-3 mb-lg-4"
                                    data-aos="fade-up"
                                    data-aos-delay="400"
                                    data-aos-duration="1000">
                                    <div className="img-box">
                                        <a href="/">
                                            <img src={require('../../Assests/c8.jpg')} alt="" />
                                            <img src={require('../../Assests/c88.jpg')} alt="" className="img-2" />
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
                                    <div className="text-part text-center">
                                        <div className="show-three-btn d-none d-md-flex d-lg-none">
                                            <a href="/"><FaRegHeart /></a>
                                            <a href="/"><IoCartOutline /></a>
                                            <a href="/"><IoSearchOutline /></a>
                                        </div>
                                        <div className="p-name mt-2 mt-lg-0">
                                            <a href="/">Tokyo Short Floral Dress</a>
                                        </div>
                                        <div className="p-price">
                                            <span>Rs. 11,900.00</span>
                                        </div>
                                        <div className="p-review">
                                            <span><FaStar /><FaStar /><FaStar /><FaStar /><FaRegStar className="blank-star" /></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bottom-btn text-center"
                            data-aos='zoom-in'
                            data-aos-delay='100'
                            data-aos-duration='700'>
                            <a href="/">DISCOVER MORE</a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Section1;