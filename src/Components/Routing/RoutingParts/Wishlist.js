import MyBreadcrumb from "../../../Common Components/MyBreadcrumb";

const Wishlist = () => {
    return (
        <>
            <section className="wishlistR rp">
                <div className="container-fluid container-xxl">
                    <div className="main-box">

                        <MyBreadcrumb title={"Wishlist"}></MyBreadcrumb>

                        <div className="box py-3">

                            <h2 className="section-title text-center m-0">Wishlist</h2>

                            <div className="empty-page text-center">
                                <p className="mb-4">Products weren't added to the wishlist</p>
                                <a href="/">CONTINUE SHOPPING</a>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default Wishlist;