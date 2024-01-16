import { useEffect, useRef, useState } from 'react';
import './ForgotPassword.scss';
import Popup from '../../Assets/Popups/Popup';
import { changePassword, forgotPassword, otpValidation } from '../ApiCalls';

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [otp, setOtp] = useState(['', '', '', '', '', '']);
    const [forgotPassPopup, setForgotPassPopup] = useState(false);
    const [resetPassPopup, setResetPassPopup] = useState(false);
    const [timer, setTimer] = useState(120);
    const [newPassword, setNewPassword] = useState('');
    const [password, setPassword] = useState('');

    // console.log({newPassword,confirmPassword});

    const otpInputs = useRef([]);

    const onForgotPassClick = async (e) => {
        console.log(email);
        e.preventDefault();
        if (email) {
            setForgotPassPopup(true);
            try {
                forgotPassword({ email })
            } catch (error) {
                console.log(error);
            }
        } else {
            setForgotPassPopup(false);
            alert('Invalid Email format')
        }
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
    const formattedOtp = otp.join('');
    // console.log(formattedOtp);

    useEffect(() => {
        let countdown = setInterval(() => {
            setTimer((prevTimer) => (prevTimer > 0 ? prevTimer - 1 : 0));
        }, 1000);

        return () => clearInterval(countdown);
    }, []);

    const handleResendOTP = () => {
        // Add logic to resend OTP, enable the button, and reset the timer
        console.log("Resend OTP clicked");
        setTimer(120); // Reset the timer to 2 minutes

        try {
            forgotPassword({ email })
        } catch (error) {
            console.log(error);
        }
    };

    const handleSubmitOTP = async (e) => {
        e.preventDefault();
        try {
            const response = await otpValidation({ email, formattedOtp });
            console.log('Response:', response);
            if (response && response == true) {
                setResetPassPopup(true);

            } else {
                alert('Invalid OTP. Please try again.');
            }

        } catch (error) {
            console.log(error);
        }
    };

    const handleNewPass = async (e) => {
        e.preventDefault();
        try {
            if (password) {
                newPassword == password;
                await changePassword({ email,password })
                alert('Successfully Changed Password');
                // window.location.reload();
            }
        } catch (error) {
            console.log(error);
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
                                        <div className="timer">
                                            Timer: {Math.floor(timer / 60)}:{timer % 60 < 10 ? `0${timer % 60}` : timer % 60}
                                        </div>
                                        <button className="submit-btn" onClick={handleSubmitOTP}>
                                            Submit OTP
                                        </button>
                                        <button className="resend-btn" onClick={handleResendOTP} disabled={timer > 0}>
                                            Resend OTP
                                        </button>
                                    </div>
                                </div>
                            </Popup>

                            <Popup trigger={resetPassPopup} setTrigger={setResetPassPopup}>
                                <div className="resetpass-popup">
                                    <h3>Reset Password</h3>
                                    <div className="resetpass-container">
                                        <div className="resetpass-prompt">
                                            <span>Enter your new password</span>
                                        </div>
                                        <div className="resetpass-input">
                                            <input type="password" placeholder='New Password' value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
                                            <input type="password" placeholder='Confirm Password' value={password} onChange={(e) => setPassword(e.target.value)} />
                                            <button onClick={handleNewPass}>SUBMIT</button>
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

export default ForgotPassword;
