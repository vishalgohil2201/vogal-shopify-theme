import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const Slider4 = () => {
    const nps = {
        responsive: {
            0: {
                items: 1,
            },
            767: {
                items: 2,
            },
            992: {
                items: 3,
            }
        },
        margin: 15,
        loop: true,
        nav: true,
        navText: ['<i class="fa-solid fa-chevron-left"></i>', '<i class="fa-solid fa-chevron-right"></i>']
    }
    return (
        <>
            <section className="news-articles spaceY">
                <div className="container-fluid container-xxl">
                    <div className="main-box">
                        <h2 className="section-title text-center m-0"
                            data-aos="fade-up"
                            data-aos-duration="800">
                            News & Artiles</h2>
                        <div className="na-slider">
                            <OwlCarousel id='slider4' {...nps} className='slider-2-3-4-cs'>
                                <div className="box"
                                    data-aos="fade-right"
                                    data-aos-delay='150'
                                    data-aos-duration='1000'>
                                    <a href='/'>
                                        <img src={require('../../Assests/ls1.jpg')} alt="" />
                                    </a>
                                    <div className="text-part text-center">
                                        <a href='/'>Match outfits with other significant</a>
                                    </div>
                                </div>
                                <div className="box"
                                    data-aos="fade-up"
                                    data-aos-delay='250'
                                    data-aos-duration='1000'>
                                    <a href='/'>
                                        <img src={require('../../Assests/ls2.jpg')} alt="" />
                                    </a>
                                    <div className="text-part text-center">
                                        <a href='/'>Fresh work outfits for new year</a>
                                    </div>
                                </div>
                                <div className="box"
                                    data-aos="fade-left"
                                    data-aos-delay='150'
                                    data-aos-duration='1000'>
                                    <a href='/'>
                                        <img src={require('../../Assests/ls3.jpg')} alt="" />
                                    </a>
                                    <div className="text-part text-center">
                                        <a href='/'>Spotlights the new role models</a>
                                    </div>
                                </div>

                                {/* Copy Boxes */}
                                <div className="box">
                                    <a href='/'>
                                        <img src={require('../../Assests/ls1.jpg')} alt="" />
                                    </a>
                                    <div className="text-part text-center">
                                        <a href='/'>Match outfits with other significant</a>
                                    </div>
                                </div>
                                <div className="box">
                                    <a href='/'>
                                        <img src={require('../../Assests/ls2.jpg')} alt="" />
                                    </a>
                                    <div className="text-part text-center">
                                        <a href='/'>Fresh work outfits for new year</a>
                                    </div>
                                </div>
                                <div className="box">
                                    <a href='/'>
                                        <img src={require('../../Assests/ls3.jpg')} alt="" />
                                    </a>
                                    <div className="text-part text-center">
                                        <a href='/'>Spotlights the new role models</a>
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

export default Slider4; 