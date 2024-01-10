import './Login.scss'
const Login = () => {
    return (
        <div>
            <div className="Login">
                <div className="login-container">
                    <div className="container-left"></div>
                    <div className="image">
                        <img src="/Images/login.png" alt="" />
                    </div>
                    <div className="container-right">
                    <form className="login-form">
					<span className="login-form-title">
						Member Login
					</span>

					<div className="wrap-input " data-validate = "Valid email is required: ex@abc.xyz">
						<input className="input" type="text" name="email" placeholder="Email"/>
						<span className="focus-input"></span>
						<span className="symbol-input">
							<i className="fa fa-envelope" aria-hidden="true"></i>
						</span>
					</div>

					<div className="wrap-input" data-validate = "Password is required">
						<input className="input" type="password" name="pass" placeholder="Password"/>
						<span className="focus-input"></span>
						<span className="symbol-input">
							<i className="fa fa-lock" aria-hidden="true"></i>
						</span>
					</div>
					
					<div className="container-login-form-btn">
						<button className="login-form-btn">
							Login
						</button>
					</div>

					<div className="text-center p-t-12">
						<span className="txt1">
							Forgot
						</span>
						<a className="txt2" href="#">
							Username / Password?
						</a>
					</div>

					<div className="text-center p-t-136">
						<a className="txt2" href="#">
							Create your Account
							<i className="fa fa-long-arrow-right m-l-5" aria-hidden="true"></i>
						</a>
					</div>
				</form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login