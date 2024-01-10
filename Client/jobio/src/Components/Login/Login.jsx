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
                            <div className='input'>
                                <input type="text" name="email" placeholder="Email" />
                                <input type="password" name="pass" placeholder="Password" />
                            </div>
                            <div className="container-login-form-btn">
                                <button className="login-form-btn">
                                    Login
                                </button>
                            </div>

                            <div className="text-center p-t-12">
                                <span className="txt1">Forgot </span>
                                <a className="txt2" href="#"> Password? </a>
                            </div>

                            <div className="text-center p-t-136">
                                <a className="txt2" href="#">Create your Account </a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login