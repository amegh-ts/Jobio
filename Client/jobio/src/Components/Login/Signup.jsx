import './Signup.scss';

const Signup = () => {
    return (
        <div>
            <div className="Signup">
                <div className="signup-container">


                    <div className="container-left">
                        <form className="signup-form">
                            <span className="signup-form-title">Create an Account</span>
                            <div className="input">
                                <i className="icon bx bx-user bx-tada"></i>
                                <input type="text" name="username" placeholder="Username" />
                            </div>
                            <div className="input">
                                <i className="icon bx bx-envelope bx-tada"></i>
                                <input type="text" name="email" placeholder="Email" />
                            </div>
                            <div className="input">
                            <i className='bx bxs-calendar bx-tada' ></i>
                                <input type="date" name="dob" />
                            </div>
                            <div className="input">
                                <i className="icon bx bxs-lock bx-tada"></i>
                                <input type="password" name="pass" placeholder="Password" />
                            </div>
                            <button className="signup-form-btn">Sign Up</button>

                            <div className="login-link">
                                <span>Already have an account? </span>
                                <a className="txt" href="/login">
                                    Login here
                                </a>
                            </div>
                        </form>
                    </div>

                    <div className="container-right">
            <div className="cl-image">
              <img src="/Images/login.png" alt="" />
            </div>
          </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;