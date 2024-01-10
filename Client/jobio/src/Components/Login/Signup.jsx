import { useState } from 'react';
import './Signup.scss';

const Signup = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        dob: '',
        type: '',
        password: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const logFormData = () => {
        console.log('Form Data:', formData);
    };

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
                                <i className='icon bx bxs-calendar bx-tada' ></i>
                                <input type="date" name="dob" />
                            </div>
                            <div className="input">
                                <i className='icon bx bxs-calendar bx-tada' ></i>
                                <select name="type" id="type" onChange={handleInputChange} value={formData.type}>
                                    <option value="" disabled selected>Your Purpose</option>
                                    <option value="Find Job">Find Job</option>
                                    <option value="Hire">Hire</option>
                                </select>
                            </div>
                            <div className="input">
                                <i className="icon bx bxs-lock bx-tada"></i>
                                <input type="password" name="pass" placeholder="Password" />
                            </div>
                            <button className="signup-form-btn" onClick={logFormData}>Sign Up</button>

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
