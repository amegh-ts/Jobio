import { useRef, useState } from 'react';
import './ForgotPassword.scss'
import Popup from '../../Assets/Popups/Popup';

const ForgotPassword = () => {
    const [email, setEmail] = useState('')
    const [otp, setOtp] = useState(['', '', '', '', '', '']);
    const [forgotPassPopup, setForgotPassPopup] = useState(false)

    const otpInputs = useRef([]);


    const onForgotPassClick = async (e) => {
        e.preventDefault();
        setForgotPassPopup(true)
    }

    const onOtpInputChange = (e, index) => {
        const value = e.target.value;

        setOtp(prevOtp => {
            const newOtp = [...prevOtp];
            newOtp[index] = value;

            return newOtp;
        });

        if (value !== '' && index < otpInputs.current.length - 1) {
            otpInputs.current[index + 1].focus();
        }
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
                                        <div className='otp-prompt'>
                                            <span>Enter the OTP you got from your email</span>
                                        </div>
                                        <div className='otp-input'>
                                            {otp.map((value, index) => (
                                                <input
                                                    key={index}
                                                    type="text"
                                                    maxLength="1"
                                                    value={value}
                                                    onChange={(e) => onOtpInputChange(e, index)}
                                                    ref={(input) => (otpInputs.current[index] = input)}
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