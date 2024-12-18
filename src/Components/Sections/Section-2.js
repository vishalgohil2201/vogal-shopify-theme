import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const Section2 = () => {
    const cs = {
        responsive: {
            0: {
                items: 3,
            },
            767: {
                items: 5
            },
            992: {
                items: 7,
            }
        },
        nav: true,
        navText: ['<i class="fa-solid fa-chevron-left"></i>', '<i class="fa-solid fa-chevron-right"></i>'],
        dots: false,
    }
    return (
        <>
            <div className="more-to-explore">
                <div className="container-fluid container-xxl">
                    <div className="main-box spaceY">
                        <h2 className="section-title text-center mb-0"
                            data-aos="fade-up"
                            data-aos-duration="800">
                            There's More to Explore
                        </h2>
                        <div className="inner-box d-md-flex">

                            <div className="col-12 col-md-4 px-1 px-md-2">
                                <div className="box-1-2"
                                    data-aos="fade-up"
                                    data-aos-delay="100"
                                    data-aos-duration="1000">
                                    <a href='/'>
                                        <img src={require('../../Assests/mp-1.jpg')} alt="" />
                                    </a>
                                    <div className="gender-btn">
                                        <button>WOMEN</button>
                                    </div>
                                </div>
                            </div>

                            <div className="col-12 col-md-4 px-1 px-md-2 mt-3 mt-md-0">
                                <div className="box-1-2"
                                    data-aos="fade-up"
                                    data-aos-delay="200"
                                    data-aos-duration="1000">
                                    <a href='/'>
                                        <img src={require('../../Assests/mp-2.jpg')} alt="" />
                                    </a>
                                    <div className="gender-btn">
                                        <button>MEN</button>
                                    </div>
                                </div>
                            </div>

                            <div className="col-4 px-2">
                                <div className="box-3 d-none d-md-flex flex-column">
                                    <div className="small-box small-box-1"
                                        data-aos="fade-up"
                                        data-aos-delay="300"
                                        data-aos-duration="1000">
                                        <a href='/'>
                                            <img src={require('../../Assests/np-1.jpg')} alt="" />
                                        </a>
                                        <div className="gender-btn">
                                            <button>SHOES</button>
                                        </div>
                                    </div>
                                    <div className="small-box small-box-2"
                                        data-aos="fade-up"
                                        data-aos-delay="350"
                                        data-aos-duration="1000">
                                        <a href='/'>
                                            <img src={require('../../Assests/np-2.jpg')} alt="" />
                                        </a>
                                        <div className="gender-btn">
                                            <button>ACCESSORIES</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    {/* Small Company Slider */}
                    <div className="company-slider"
                        data-aos='fade-in'
                        data-aos-duration='2000'>
                        <OwlCarousel loop={true} id='cmpny-slider' {...cs} className='slider-2-3-4-cs'>
                            <div className='box'>
                                <div className="mini-box">
                                    <a href='/'>
                                        <img src={require('../../Assests/logo1.jpg')} alt="" />
                                    </a>
                                </div>
                            </div>
                            <div className='box'>
                                <div className="mini-box">
                                    <a href='/'>
                                        <img src={require('../../Assests/logo2.jpg')} alt="" />
                                    </a>
                                </div>
                            </div>
                            <div className='box'>
                                <div className="mini-box">
                                    <a href='/'>
                                        <img src={require('../../Assests/logo3.jpg')} alt="" />
                                    </a>
                                </div>
                            </div>
                            <div className='box'>
                                <div className="mini-box">
                                    <a href='/'>
                                        <img src={require('../../Assests/logo4.jpg')} alt="" />
                                    </a>
                                </div>
                            </div>
                            <div className='box'>
                                <div className="mini-box">
                                    <a href='/'>
                                        <img src={require('../../Assests/logo5.jpg')} alt="" />
                                    </a>
                                </div>
                            </div>
                            <div className='box'>
                                <div className="mini-box">
                                    <a href='/'>
                                        <img src={require('../../Assests/logo6.jpg')} alt="" />
                                    </a>
                                </div>
                            </div>
                            <div className='box'>
                                <div className="mini-box">
                                    <a href='/'>
                                        <img src={require('../../Assests/logo7.jpg')} alt="" />
                                    </a>
                                </div>
                            </div>
                            <div className='box'>
                                <div className="mini-box">
                                    <a href='/'>
                                        <img src={require('../../Assests/logo1.jpg')} alt="" />
                                    </a>
                                </div>
                            </div>
                            <div className='box'>
                                <div className="mini-box">
                                    <a href='/'>
                                        <img src={require('../../Assests/logo2.jpg')} alt="" />
                                    </a>
                                </div>
                            </div>
                            <div className='box'>
                                <div className="mini-box">
                                    <a href='/'>
                                        <img src={require('../../Assests/logo3.jpg')} alt="" />
                                    </a>
                                </div>
                            </div>
                            <div className='box'>
                                <div className="mini-box">
                                    <a href='/'>
                                        <img src={require('../../Assests/logo4.jpg')} alt="" />
                                    </a>
                                </div>
                            </div>
                            <div className='box'>
                                <div className="mini-box">
                                    <a href='/'>
                                        <img src={require('../../Assests/logo5.jpg')} alt="" />
                                    </a>
                                </div>
                            </div>
                            <div className='box'>
                                <div className="mini-box">
                                    <a href='/'>
                                        <img src={require('../../Assests/logo6.jpg')} alt="" />
                                    </a>
                                </div>
                            </div>
                            <div className='box'>
                                <div className="mini-box">
                                    <a href='/'>
                                        <img src={require('../../Assests/logo7.jpg')} alt="" />
                                    </a>
                                </div>
                            </div>
                        </OwlCarousel>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Section2;