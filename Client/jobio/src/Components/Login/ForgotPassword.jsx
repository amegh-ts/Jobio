import './ForgotPassword.scss'

const ForgotPassword = () => {
  return (
    <div>
        <div className="Forgot">
                <div className="login-container">
                    <div className="container-left">
                        <div className="cl-image">
                            <img src="/Images/login.png" alt="" />
                        </div>
                    </div>

                    <div className="container-right">
                        <form className="login-form">
                            <span className="login-form-title">
                                Forgot Password?
                            </span>
                            <>
                            <div className='input'>
                            <i className='icon bx bx-envelope bx-tada' ></i>
                                {/* <input type="text" name="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} /> */}
                            </div>
                            </>
                            {/* <button className="login-form-btn" onClick={onLogInClick}>Login</button> */}

                            <div className="create-account">
                                <a className="txt" href="/signup">Login</a>
                            </div>
                        </form>
                    </div>
                </div>
            </div >
    </div>
  )
}

export default ForgotPassword