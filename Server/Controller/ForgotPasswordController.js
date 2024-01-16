const nodemailer = require('nodemailer');
const mailer = require('../Models/ForgotPasswordSchema');
const Crypto = require('crypto-js')
const dotenv = require('dotenv');

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASSWORD
    }
});

function generateOtp() {
    return Math.floor(100000 + Math.random() * 900000).toString();
}

const clearExpiredOtps = async () => {
    const currentTime = new Date();
    try {
        // Remove documents where otpExpiration is less than the current time
        await mailer.deleteMany({ otpExpiration: { $lt: currentTime } });
        console.log('Expired OTPs cleared from the database.');
    } catch (error) {
        console.error('Error clearing expired OTPs:', error);
    }
};

// Schedule the function to run every minute (adjust as needed)
setInterval(clearExpiredOtps, 20 * 1000);

const forgotPassword = async (req, res) => {
    // console.log(req.body);
    const { email } = req.body;
    const otp = generateOtp();

    // Set expiration time to 2 minutes
    const otpExpiration = new Date(Date.now() + 2 * 60 * 1000);

    // console.log('-------', otp, otpExpiration, email);

    const verification = new mailer({
        email,
        otp,
        otpExpiration,
    });

    try {
        await verification.save();

        const mailOption = {
            from: process.env.EMAIL,
            to: email,
            subject: 'Your OTP Code',
            text: otp,
        };

        // console.log("mail option", mailOption);
        const info = await transporter.sendMail(mailOption);
        // console.log('Email sent:', info);
        return res.status(200).json({ message: "OTP sent successfully", otp });
    } catch (error) {
        console.error('Error saving verification details:', error);
        return res.status(500).json({ error: 'Error sending OTP' });
    }
};

const otpValidation = async (req, res) => {
    // console.log(req.body);
    const { email, formattedOtp } = req.body;
    console.log(formattedOtp);
    try {
        const storedData = await mailer.findOne({ email: email });
        // console.log('stored data', storedData);
        const storedOtp = storedData.otp;
        // console.log('stored otp', storedOtp);

        // code for validation
        if (formattedOtp == storedOtp) {
            return res.status(200).json(true);
        } else {
            return res.status(400).json(false);
        }

    } catch (error) {
        console.log(error);
    }
}

const changePassword = async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({ error: 'Email and password are required.' });
    }
    try {
        const encryptedPassword = Crypto.AES.encrypt(password, process.env.CRYPTO_KEY).toString();
        const storedData = await mailer.findOne({ email });
        if (storedData) {
            const updateData = await mailer.findOneAndUpdate(
                { email },
                { $set: { password: encryptedPassword } },
                { new: true }
            );
            return res.status(200).json(updateData);
        } else {
            console.log('Email verification failed');
            return res.status(404).json({ error: 'Email not found.' });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
};


module.exports = { forgotPassword, clearExpiredOtps, otpValidation, changePassword };
