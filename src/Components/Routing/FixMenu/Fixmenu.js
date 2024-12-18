// Icons
import { IoHomeOutline } from "react-icons/io5";
import { FiUser } from "react-icons/fi";
import { CgSearch } from "react-icons/cg";
import { FaRegHeart } from "react-icons/fa6";
import { IoCartOutline } from "react-icons/io5";

import { Link } from "react-router-dom";

const Fixmenu = () => {

    const openSearchOffset = () => {
        document.getElementById('search-offset').style.transform = 'translateX(0px)';
        document.getElementById('search-offset').style.transition = '0.4s';
    }

    const openCartOffset = () => {
        document.getElementById('cart-offset').style.transform = 'translateX(0px)';
        document.getElementById('cart-offset').style.transition = '0.4s';
    }

    return (
        <>
            <section className="fixmenuR d-md-none">
                <div className="container-fluid">
                    <div className="main-box">
                        <ul className="box m-0 p-0">
                            <li>
                                <Link to="/">
                                    <IoHomeOutline />
                                    <span className="d-block">Home</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="account">
                                    <FiUser></FiUser>
                                    <span className="d-block">Account</span>
                                </Link>
                            </li>
                            <li>
                                <Link onClick={() => openSearchOffset()}>
                                    <CgSearch></CgSearch>
                                    <span className="d-block">Search</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="wishlist">
                                    <FaRegHeart></FaRegHeart>
                                    <span className="d-block">Wishlist</span>
                                </Link>
                            </li>
                            <li>
                                <Link onClick={() => openCartOffset()}>
                                    <IoCartOutline></IoCartOutline>
                                    <span className="d-block">Cart</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

            </section>


        </>
    )
}

export default Fixmenu;

