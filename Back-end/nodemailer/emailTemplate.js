export const VERIFICATION_CODE_EMAIL_TEMPLATE = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>OTP Verification - ReadSpeak</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 0;
            color: #333;
        }
        .container {
            max-width: 600px;
            margin: 50px auto;
            background-color: #ffffff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        .header {
            text-align: center;
            padding: 10px 0;
            background-color: #4CAF50;
            color: #ffffff;
            border-radius: 8px 8px 0 0;
        }
        .header h1 {
            margin: 0;
            font-size: 24px;
        }
        .content {
            padding: 20px;
            text-align: center;
        }
        .content p {
            font-size: 16px;
            margin-bottom: 20px;
        }
        .otp {
            font-size: 28px;
            font-weight: bold;
            color: #4CAF50;
            margin-bottom: 20px;
        }
        .footer {
            text-align: center;
            font-size: 14px;
            color: #999;
            padding: 10px;
            border-top: 1px solid #eeeeee;
        }
        .footer a {
            color: #4CAF50;
            text-decoration: none;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>OTP Verification - ReadSpeak</h1>
        </div>
        <div class="content">
            <p>Thank you for creating an account with ReadSpeak!</p>
            <p>Your One-Time Password (OTP) for account verification is:</p>
            <p class="otp">{otpcodereplacer}</p>
            <p>Please enter this OTP to complete your registration.</p>
        </div>
        <div class="footer">
            <p>If you did not request this, please ignore this email or contact our support team.</p>
            <p>Need help? <a href="mailto:support@readspeak.com">
`;

export const PASSWORD_RESET_EMAIL_TEMPLATE = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Reset Your Password - ReadSpeak</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 0;
            color: #333;
        }
        .container {
            max-width: 600px;
            margin: 50px auto;
            background-color: #ffffff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        .header {
            text-align: center;
            padding: 10px 0;
            background-color: #4CAF50;
            color: #ffffff;
            border-radius: 8px 8px 0 0;
        }
        .header h1 {
            margin: 0;
            font-size: 24px;
        }
        .content {
            padding: 20px;
            text-align: center;
        }
        .content p {
            font-size: 16px;
            margin-bottom: 20px;
        }
        .button {
            display: inline-block;
            padding: 12px 25px;
            font-size: 16px;
            color: #ffffff;
            background-color: #4CAF50;
            text-decoration: none;
            border-radius: 5px;
            margin-bottom: 20px;
        }
        .footer {
            text-align: center;
            font-size: 14px;
            color: #999;
            padding: 10px;
            border-top: 1px solid #eeeeee;
        }
        .footer a {
            color: #4CAF50;
            text-decoration: none;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>Reset Your Password - ReadSpeak</h1>
        </div>
        <div class="content">
            <p>Hello,{usernamereplacer}</p>
            <p>We received a request to reset your password for your ReadSpeak account. Click the button below to reset your password:</p>
            <a href="http://localhost:3000/reset-password/{tokenreplacer}" class="button">Reset Password</a>
            <p>If you did not request a password reset, please ignore this email or contact our support team if you have any concerns.</p>
            <p>This link will expire in 24 hours.</p>
        </div>
        <div class="footer">
            <p>Need help? <a href="mailto:support@readspeak.com">Contact Support</a></p>
        </div>
    </div>
</body>
</html>
`;

export const WELCOME_EMAIL_TEMPLATE = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome to ReadSpeak!</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 0;
            color: #333;
        }
        .container {
            max-width: 600px;
            margin: 50px auto;
            background-color: #ffffff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        .header {
            text-align: center;
            padding: 10px 0;
            background-color: #4CAF50;
            color: #ffffff;
            border-radius: 8px 8px 0 0;
        }
        .header h1 {
            margin: 0;
            font-size: 24px;
        }
        .content {
            padding: 20px;
            text-align: center;
        }
        .content p {
            font-size: 16px;
            margin-bottom: 20px;
        }
        .footer {
            text-align: center;
            font-size: 14px;
            color: #999;
            padding: 10px;
            border-top: 1px solid #eeeeee;
        }
        .footer a {
            color: #4CAF50;
            text-decoration: none;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>Welcome to ReadSpeak!</h1>
        </div>
        <div class="content">
            <p>Hello {usernamereplacer},</p>
            <p>We are thrilled to welcome you to ReadSpeak! 🎉</p>
            <p>Thank you for signing up. We’re excited to have you on board and look forward to helping you with our services.</p>
            <p>To get started, please visit our website and explore the features we offer. If you have any questions or need assistance, feel free to reach out to our support team.</p>
            <p>Welcome once again, and we hope you enjoy your experience with us!</p>
            <p>Best regards,<br>The ReadSpeak Team</p>
        </div>
        <div class="footer">
            <p>Need help? <a href="mailto:support@readspeak.com">Contact Support</a></p>
        </div>
    </div>
</body>
</html>
`;
export const RESET_PASSWORD_DONE_TEMPLATE = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Password Reset Successful</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 0;
            color: #333;
        }
        .container {
            max-width: 600px;
            margin: 50px auto;
            background-color: #ffffff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        .header {
            text-align: center;
            padding: 10px 0;
            background-color: #4CAF50;
            color: #ffffff;
            border-radius: 8px 8px 0 0;
        }
        .header h1 {
            margin: 0;
            font-size: 24px;
        }
        .content {
            padding: 20px;
            text-align: center;
        }
        .content p {
            font-size: 16px;
            margin-bottom: 20px;
        }
        .footer {
            text-align: center;
            font-size: 14px;
            color: #999;
            padding: 10px;
            border-top: 1px solid #eeeeee;
        }
        .footer a {
            color: #4CAF50;
            text-decoration: none;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>Password Reset Successful</h1>
        </div>
        <div class="content">
            <p>Hello {usernamereplacer},</p>
            <p>We wanted to let you know that your password has been successfully reset. 🎉</p>
            <p>If you did not request this change or if you believe an unauthorized person has accessed your account, please contact us immediately.</p>
            <p>To keep your account secure, we recommend not sharing your password with anyone and using a strong, unique password for your ReadSpeak account.</p>
            <p>If you have any questions or need further assistance, feel free to reach out to our support team.</p>
            <p>Best regards,<br>The ReadSpeak Team</p>
        </div>
        <div class="footer">
            <p>Need help? <a href="mailto:readspeak553@gmail.com">Contact Support</a></p>
        </div>
    </div>
</body>
</html>
`;
