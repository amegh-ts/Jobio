const nodemailer = require('nodemailer');
const mailer = require('../Models/ForgotPasswordSchema');
const userController = require('../Models/UserSchema')
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
setInterval(clearExpiredOtps, 1 * 60 * 1000);

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

    // HTML content from your provided page
    const htmlContent = `
<!DOCTYPE html>
<html lang="en">
  <!-- ... (Your HTML content) ... -->
</html>
`;

    try {
        await verification.save();
        const mailOption = {
            from: process.env.EMAIL,
            to: email,
            subject: 'Your OTP Code',
            // text: otp,
            html: `
            <!DOCTYPE html>
            <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>Your OTP Code</title>
                </head>
                <body style=" margin: 0; font-family: 'Poppins', sans-serif; background: #ffffff; font-size: 14px;">
                    <div
                        style="max-width: 680px; margin: 0 auto; padding: 45px 30px 60px; background: #f4f7ff;
                        background-image: url(https://archisketch-resources.s3.ap-northeast-2.amazonaws.com/vrstyler/1661497957196_595865/email-template-background-banner);
                        background-repeat: no-repeat; background-size: 800px 452px; background-position: top center; font-size: 14px; color: #434343;">
                        <main>
                            <div
                                style=" margin: 0; margin-top: 70px; padding: 92px 30px 115px; background: #ffffff; border-radius: 30px; text-align: center; ">
                                <div style="width: 100%; max-width: 489px; margin: 0 auto">
                                    <h1 style=" margin: 0; font-size: 24px; font-weight: 500; color: #1f1f1f; ">
                                        Your OTP
                                    </h1>
                                    <p style=" margin: 0; margin-top: 17px; font-size: 16px; font-weight: 500; ">
                                        Hey There,
                                    </p>
                                    <p style="margin: 0; margin-top: 17px; font-weight: 500; letter-spacing: 0.56px; ">
                                        Thank you for choosing JOBIO. Use the following OTP to complete
                                        the procedure to change your email address. OTP is valid for
                                        <span style="font-weight: 600; color: #1f1f1f">2 minutes</span>.
                                        Do not share this code with others.
                                    </p>
                                    <p
                                        style=" margin: 0; margin-top: 60px; font-size: 40px; font-weight: 600; letter-spacing: 25px; color: #ba3d4f; ">
                                        ${otp}
                                    </p>
                                </div>
                            </div>
                            <p
                                style="max-width: 400px; margin: 0 auto; margin-top: 90px; text-align: center; font-weight: 500; color: #8c8c8c;">
                                Need help? Ask at
                                <a href="mailto:corplive58@gmail.com"
                                    style="color: #499fb6; text-decoration: none">corplive58@gmail.com</a> or visit our
                                <a href="" target="_blank" style="color: #499fb6; text-decoration: none">Help Center</a>
                            </p>
                        </main>

                        <footer
                            style=" width: 100%; max-width: 490px; margin: 20px auto 0; text-align: center; border-top: 1px solid #e6ebf1;">
                            <p style=" margin: 0; margin-top: 40px; font-size: 16px; font-weight: 600; color: #434343;">
                                JOBIO
                            </p>
                            <p style="margin: 0; margin-top: 8px; color: #434343">
                                Address 540, City, State.
                            </p>
                            <p style="margin: 0; margin-top: 16px; color: #434343">
                                Copyright © 2024 Company. All rights reserved.
                            </p>
                        </footer>
                    </div>
                </body>
            </html>
        `,
        };

        // console.log("mail option", mailOption);
        const info = await transporter.sendMail(mailOption);
        // console.log('Email sent:', info);
        console.log('200 Successful');
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
            console.log('200 Successful');
        } else {
            return res.status(400).json(false);
        }

    } catch (error) {
        console.log(error);
    }
}

const changePassword = async (req, res) => {
    const { email, password } = req.body;
    console.log(req.body);
    if (!email || !password) {
        return res.status(400).json({ error: 'Email and password are required.' });
    }
    try {
        console.log('jjjjjjjjjjjjjjjjjjjjjjj');
        const encryptedPassword = Crypto.AES.encrypt(password, process.env.Crypto_js).toString();
        console.log('enc pass', encryptedPassword);
        const storedData = await mailer.findOne({ email });
        if (storedData) {
            const updateData = await userController.findOneAndUpdate({ email }, { $set: { password: encryptedPassword } }, { new: true });
            console.log(updateData);
            console.log('200 Successful');
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
