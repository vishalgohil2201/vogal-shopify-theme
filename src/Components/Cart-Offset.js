import { IoMdClose } from "react-icons/io";
import { BsCart2 } from "react-icons/bs";

const CartOffset = () => {


    return (
        <>

            <section className="cart-offset" id="cart-offset">
                <div className="container-fluid">
                    <div className="main-box">

                        <div className="close-btn">
                            <a>
                                <IoMdClose />
                            </a>
                        </div>
                        <div className="box text-center">

                            <div className="cart-icon">
                                <BsCart2 />
                            </div>
                            <p>No Products in the Cart</p>
                            <div className="shopping-btn">
                                <a>CONTINUE SHOPPING</a>
                            </div>
                            <br></br>
                            <span>Have an account?</span>
                            <p><a><u>Log in</u></a> to check out faster.</p>
                        </div>

                    </div>
                </div>
            </section>

        </>
    )
}

export default CartOffset;