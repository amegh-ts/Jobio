import { useState } from 'react';
import './Signup.scss';

const Signup = () => {
    const [username, setUsername] = useState('')
    const [dob, setDob] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [type, setType] = useState('')

    return (
        <div>
            <div className="Signup">
                <div className="signup-container">


                    <div className="container-left">
                        <form className="signup-form">
                            <span className="signup-form-title">Create an Account</span>
                            <div className="input">
                                <i className="icon bx bx-user bx-tada"></i>
                                <input type="text" name="username" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
                            </div>
                            <div className="input">
                                <i className="icon bx bx-envelope bx-tada"></i>
                                <input type="text" name="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                            </div>
                            <div className="input">
                                <i className='icon bx bxs-calendar bx-tada' ></i>
                                <input type="date" name="dob" value={dob} onChange={(e) => setDob(e.target.value)} />
                            </div>
                            <div className="input">
                                <i className='icon bx bxs-calendar bx-tada' ></i>
                                <select name="type" id="type" value={type} onChange={(e) => setType(e.target.value)}>
                                    <option value="" disabled selected>Your Purpose</option>
                                    <option value="Find Job">Find Job</option>
                                    <option value="Hire">Hire</option>
                                </select>
                            </div>
                            <div className="input">
                                <i className="icon bx bxs-lock bx-tada"></i>
                                <input type="password" name="pass" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
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
