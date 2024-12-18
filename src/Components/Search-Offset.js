import { IoMdClose } from "react-icons/io";
import { CgSearch } from "react-icons/cg";

const SearchOffset = () => {


    return (
        <>
            <section className="search-offset overflow-y-scroll" id="search-offset">
                <div className="main-box">

                    <div className="title-and-closebtn d-flex justify-content-between align-items-center">
                        <h3 className="m-0">Search Products</h3>
                        <a>
                            <IoMdClose />
                        </a>
                    </div>

                    <div className="input-menu w-100 d-flex align-items-center">
                        <div className="search-input">
                            <input type="text" placeholder="Search for items" className="w-100 h-100" />
                        </div>
                        <div className="search-btn">
                            <button className="w-100 h-100"><CgSearch className="mb-1 me-1"></CgSearch></button>
                        </div>
                    </div>
                    <br></br>
                    <div className="box">
                        <div className="search-pre">
                            <h3>Quick Search:</h3>
                            <a><u>Pant</u></a>
                            <a><u>Top</u></a>
                            <a><u>Shorts</u></a>
                            <a><u>Accessories</u></a>
                            <a><u>Watch</u></a>
                        </div>

                        <h4>You May Also Like</h4>

                        <div className="products-list">
                            <div className="product-item d-flex align-items-center">
                                <div className="img-box">
                                    <img src={require('../../src/Assests/sm1.jpg')} className="w-100" alt="" />
                                </div>
                                <div className="text-part">
                                    <a>Long Sleeve Top Black</a>
                                    <span>Rs. 3,400.00</span>
                                </div>
                            </div>
                            <div className="product-item d-flex align-items-center">
                                <div className="img-box">
                                    <img src={require('../../src/Assests/sm2.jpg')} className="w-100" alt="" />
                                </div>
                                <div className="text-part">
                                    <a>High Heel Black Sandal</a>
                                    <span>Rs. 10,200.00</span>
                                </div>
                            </div>
                            <div className="product-item d-flex align-items-center">
                                <div className="img-box">
                                    <img src={require('../../src/Assests/sm3.jpg')} className="w-100" alt="" />
                                </div>
                                <div className="text-part">
                                    <a>Zip-Up Sweatshirt with Hood</a>
                                    <span>Rs. 6,800.00</span>
                                </div>
                            </div>
                            <div className="product-item d-flex align-items-center">
                                <div className="img-box">
                                    <img src={require('../../src/Assests/sm4.jpg')} className="w-100" alt="" />
                                </div>
                                <div className="text-part">
                                    <a>Lula Multicolor Long Dress</a>
                                    <span>Rs. 7,700.00</span>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </section>
        </>
    )
}

export default SearchOffset;
