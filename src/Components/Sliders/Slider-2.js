import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const Slider2 = () => {

    const s2 = {
        responsive: {
            0: {
                items: 2,
            },
            767: {
                items: 3
            }
        },
        loop: true,
        margin: 10,
        dots: false,
        nav: true,
        navText: ['<i class="fa-solid fa-chevron-left"></i>', '<i class="fa-solid fa-chevron-right"></i>']
    }
    return (
        <>
            <section className='slider-2-box spaceY'>
                <div className='container-fluid container-xxl px-3 slider-2-3-4-cs'>
                    <h2 className='section-title text-center m-0'
                        data-aos="fade-up"
                        data-aos-duration="800">
                        Explore Top Categories
                    </h2>

                    <OwlCarousel className='owl-theme' id='slider2' {...s2}>
                        <div className="box"
                            data-aos="fade-up"
                            data-aos-delay="100"
                            data-aos-duration="1000">
                            <a href='/'>
                                <div className="img-box">
                                    <img src={require('../../Assests/s1.1.jpg')} alt="" />
                                </div>
                                <div className="details text-center">
                                    <h3 className='m-0'>Spring Forward!</h3>
                                    <button>SHOP MORE</button>
                                </div>
                            </a>
                        </div>
                        <div className="box"
                            data-aos="fade-up"
                            data-aos-delay="300"
                            data-aos-duration="1000">
                            <a href='/'>
                                <div className="img-box">
                                    <img src={require('../../Assests/s1.2.jpg')} alt="" />
                                </div>
                                <div className="details text-center">
                                    <h3 className='m-0'>Bold Moves</h3>
                                    <button>DISCOVER MORE</button>
                                </div>
                            </a>
                        </div>
                        <div className="box"
                            data-aos="fade-up"
                            data-aos-delay="500"
                            data-aos-duration="1000">
                            <a href='/'>
                                <div className="img-box">
                                    <img src={require('../../Assests/s1.3.jpg')} alt="" />
                                </div>
                                <div className="details text-center">
                                    <h3 className='m-0'>Online Exclusive</h3>
                                    <button>DISCOVER MORE</button>
                                </div>
                            </a>
                        </div>
                        
                        {/* Extra Second Time */}
                        <div className="box">
                            <a href='/'>
                                <div className="img-box">
                                    <img src={require('../../Assests/s1.1.jpg')} alt="" />
                                </div>
                                <div className="details text-center">
                                    <h3 className='m-0'>Spring Forward!</h3>
                                    <button>SHOP MORE</button>
                                </div>
                            </a>
                        </div>
                        <div className="box">
                            <a href='/'>
                                <div className="img-box">
                                    <img src={require('../../Assests/s1.2.jpg')} alt="" />
                                </div>
                                <div className="details text-center">
                                    <h3 className='m-0'>Bold Moves</h3>
                                    <button>DISCOVER MORE</button>
                                </div>
                            </a>
                        </div>
                        <div className="box">
                            <a href='/'>
                                <div className="img-box">
                                    <img src={require('../../Assests/s1.3.jpg')} alt="" />
                                </div>
                                <div className="details text-center">
                                    <h3 className='m-0'>Online Exclusive</h3>
                                    <button>DISCOVER MORE</button>
                                </div>
                            </a>
                        </div>
                    </OwlCarousel>
                </div>
            </section>
        </>
    )
}
export default Slider2;