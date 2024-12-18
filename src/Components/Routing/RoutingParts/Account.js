
import MyBreadcrumb from '../../../Common Components/MyBreadcrumb';

const Account = () => {
    return (
        <>
            <section className="accountR rp">
                <div className="container-fluid container-md">
                    <div className="main-box">

                        <MyBreadcrumb title={"Account"}></MyBreadcrumb>

                        <h2 className='section-title text-center m-0'>My Account</h2>

                        <div className="account-box d-md-flex">

                            <div className="col-md-6 px-2">
                                <div className='form-box'>

                                    <h5 className='login'>LOGIN</h5>
                                    <p>If you have an account with us, please log in.</p>
                                    <input type="text" className='form-control txt-box' placeholder='Email' />
                                    <input type="password" className='form-control txt-box' placeholder='Password' />

                                    <div className="btn-forgot">
                                        <input type="button" value="SIGN IN" className='btn' />
                                        <a href="/">Forgot your password?</a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-6 px-2">
                                <div className="customer-box">

                                    <h5>NEW CUSTOMER?</h5>
                                    <p>Registering for this site allows you to access your order status and history. We’ll get a new account set up for you in no time. For this will only ask you for information necessary to make the purchase process faster and easier</p>

                                    <input type="button" value="CREATE AN ACCOUNT" className='btn' />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Account;