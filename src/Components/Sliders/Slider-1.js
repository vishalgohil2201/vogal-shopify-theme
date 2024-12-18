import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const Slider1 = () => {

    const data = {
        items: 1,
        loop: true,
        nav: true,
        navText: ['<i class="fa-solid fa-chevron-left"></i>', '<i class="fa-solid fa-chevron-right"></i>'],
        
        // Animation
        animateIn:'animate__fadeIn',
        smartSpeed:'200'
    }

    return (
        <>
            {/* Mobile Slider */}
            <OwlCarousel className='owl-theme d-md-none mb-4' id='m-slider-1' items={1}>
                <div className="box box-1 position-relative">
                    <img src={require('../../Assests/m-banner-1.jpg')} alt="" />
                    <div className="text-part">
                        <p>NEXT COLLECTION</p>
                        <h3><b>Luxury brands</b> <br></br> Without Labels</h3>
                        <a href='/'>SHOP NOW</a>
                    </div>
                </div>
                <div className="box box-2 position-relative">
                    <img src={require('../../Assests/m-banner-2.jpg')} alt="" />
                    <div className="text-part">
                        <h3>Making <br /> Bold Moves</h3>
                        <div className="two-btn">
                            <a href='/' className='btn-1'>SHOP WOMEN</a>
                            <a href='/' className='btn-2'>SHOP MEN</a>
                        </div>
                    </div>
                </div>
            </OwlCarousel>
            {/* PC SLIDER */}
            <OwlCarousel className='owl-theme d-none d-md-block mb-4' {...data} id='slider1'>
                <div className="box box-1 position-relative overflow-hidden">
                    <img src={require('../../Assests/banner2.jpg')} alt="" />
                    <div className="text-part">
                        <div className='wow animate__zoomIn'>
                            <p>NEXT COLLECTION</p>
                            <h3><b>Luxury brands</b> <br></br> Without Labels</h3>
                            <a href='/'>SHOP NOW</a>
                        </div>
                    </div>
                </div>
                <div className="box box-2 position-relative overflow-hidden">
                    <img src={require('../../Assests/banner1.jpg')} alt="" />
                    <div className="text-part">
                        <div className='wow animate__zoomIn'>
                            <h3>Making <br /> Bold Moves</h3>
                            <p>Upgrade your wardrobe with a variation of styles</p>
                            <div className="two-btn">
                                <a href='/' className='btn-1'>SHOP WOMEN</a>
                                <a href='/' className='btn-2'>SHOP MEN</a>
                            </div>
                        </div>
                    </div>
                </div>
            </OwlCarousel>
        </>
    )
}
export default Slider1;