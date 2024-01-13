import { useState } from 'react';
import './ForgotPassword.scss'
import Popup from '../../Assets/Popups/Popup';

const ForgotPassword = () => {
    const [email, setEmail] = useState('')
    const [forgotPassPopup, setForgotPassPopup] = useState(false)


    const onForgotPassClick = async (e) => {
        e.preventDefault();
        setForgotPassPopup(true)
    }
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
                                    <input type="text" name="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                                </div>
                            </>
                            <button className="login-form-btn" onClick={onForgotPassClick}>Send OTP</button>

                            <Popup trigger={forgotPassPopup} setTrigger={setForgotPassPopup}>
                                <div className="forgotpass-popup">
                                    <h3>OTP</h3>
                                    <div className='forgotpass-container'>
                                        {/* Section 1: Prompt to enter OTP */}
                                        <div className='otp-prompt'>
                                            <span>Enter OTP:</span>
                                        </div>

                                        {/* Section 2: Input boxes for OTP */}
                                        <div className='otp-input'>
                                            {Array.from({ length: 6 }).map((_, index) => (
                                                <input
                                                    key={index}
                                                    type="text"
                                                    maxLength="1"
                                                    value={otp[index] || ''}
                                                    onChange={onOtpInputChange}
                                                />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </Popup>

                            <div className="create-account">
                                <a className="txt" href="/login">Login</a>
                            </div>
                        </form>
                    </div>
                </div>
            </div >
        </div>
    )
}

export default ForgotPassword