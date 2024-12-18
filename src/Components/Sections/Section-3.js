
const Section3 = () => {
    return (
        <>
            <section className="services">
                <div className="container-fluid container-xxl">
                    <div className="main-box d-flex flex-wrap justify-content-between">
                        <div className="col-12 col-sm-6 col-lg-3">
                            <div className="box text-center text-sm-start d-sm-flex"
                            data-aos='flip-up'
                            data-aos-duration='1000'>
                                <div className="img-box mx-auto mx-sm-0 me-sm-3 mb-3 mb-sm-0">
                                    <img src={require('../../Assests/b1.png')} alt="" />
                                </div>
                                <div className="text-part">
                                    <h5>FREE DELIVERY</h5>
                                    <span>For all orders over $120</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-lg-3">
                            <div className="box text-center text-sm-start d-sm-flex"
                            data-aos='flip-up'
                            data-aos-duration='1000'>
                                <div className="img-box mx-auto mx-sm-0 me-sm-3 mb-3 mb-sm-0">
                                    <img src={require('../../Assests/b2.png')} alt="" />
                                </div>
                                <div className="text-part">
                                    <h5>24/7 HELP CENTER</h5>
                                    <span>Decicated 24/7 support</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-lg-3">
                            <div className="box text-center text-sm-start d-sm-flex"
                            data-aos='flip-up'
                            data-aos-duration='1000'>
                                <div className="img-box mx-auto mx-sm-0 me-sm-3 mb-3 mb-sm-0">
                                    <img src={require('../../Assests/b3.png')} alt="" />
                                </div>
                                <div className="text-part">
                                    <h5>SATISFIED OR REFUNDED</h5>
                                    <span>Free returns within 14 days</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-lg-3">
                            <div className="box text-center text-sm-start d-sm-flex"
                            data-aos='flip-up'
                            data-aos-duration='1000'>
                                <div className="img-box mx-auto mx-sm-0 me-sm-3 mb-3 mb-sm-0">
                                    <img src={require('../../Assests/b4.png')} alt="" />
                                </div>
                                <div className="text-part">
                                    <h5>100% SECURE PAYMENTS</h5>
                                    <span>Accept all payment methods</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Section3;