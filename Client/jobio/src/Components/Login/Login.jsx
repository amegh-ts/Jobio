import './Login.scss'

const Login = () => {

    return (
        <div>
            <div className="Login">
                <div className="login-container">
                    <div className="container-left">
                        <div className="cl-image">
                            <img src="/Images/login.png" alt="" />
                        </div>
                    </div>

                    <div className="container-right">
                        <form className="login-form">
                            <span className="login-form-title">
                                Member Login
                            </span>
                            <>
                            <div className='input'>
                            <i className='icon bx bx-envelope bx-tada' ></i>
                                <input type="text" name="email" placeholder="Email" />
                            </div>
                            <div className='input'>
                            <i className='icon bx bxs-lock bx-tada' ></i>
                                <input type="password" name="pass" placeholder="Password" />
                            </div>
                            </>
                            <button className="login-form-btn">
                                Login
                            </button>

                            <div className="forget-pass">
                                <span>Forgot </span>
                                <a className="txt" href="#"> Password? </a>
                            </div>

                            <div className="create-account">
                                <a className="txt" href="#">Create your Account </a>
                            </div>
                        </form>
                    </div>
                </div>
            </div >
        </div >
    )
}

export default Login