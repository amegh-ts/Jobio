const nodemailer = require('nodemailer');
const mailer = require('../Models/ForgotPasswordSchema');
const dotenv = require('dotenv');

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASSWORD
    }
})

function generateOtp() {
    return Math.floor(1000 + Math.random() * 9000).toString();
}

const forgotPassword = async (req, res) => {
    const { email } = req.body;
    const otp = generateOtp();
    const otpExpiration = new Date(Date.now() + 5 * 60 * 1000)
    console.log('-------', otp, otpExpiration, email);

    const verification = new mailer({
        email,
        otp,
        otpExpiration,
    });
    try {
        const mailOption={
            from: process.env.EMAIL,
            to: email,
            subject: 'Your OTP Code',
        }
    } catch (error) {
        console.error('Error saving verification details:', error);
        return res.status(500).json({ error: 'Error sending OTP' });
    }


}

