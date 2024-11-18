import { sendEmail } from "./config.js";
import {
  PASSWORD_RESET_EMAIL_TEMPLATE,
  RESET_PASSWORD_DONE_TEMPLATE,
  VERIFICATION_CODE_EMAIL_TEMPLATE,
  WELCOME_EMAIL_TEMPLATE,
} from "./emailTemplate.js";

export async function sendVerificationEmail(userEmail, otp) {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: userEmail,
    subject: "Account Verification",
    html: VERIFICATION_CODE_EMAIL_TEMPLATE.replace("{otpcodereplacer}", otp),
  };

  sendEmail(mailOptions);
}

export async function sendWelcomeEmail(userEmail, username) {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: userEmail,
    subject: "Welcome to ReadSpeak",
    html: WELCOME_EMAIL_TEMPLATE.replace("{usernamereplacer}", username),
  };

  sendEmail(mailOptions);
}

export async function sendResetPasswordEmail(userEmail, token, username) {
  const mailOptions = {
    to: userEmail,
    subject: "Reset Password",
    html: PASSWORD_RESET_EMAIL_TEMPLATE.replace(
      "{tokenreplacer}",
      token
    ).replace("{usernamereplacer}", username),
  };

  sendEmail(mailOptions);
}

export async function sendResetPasswordDoneEmail(userEmail, username) {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: userEmail,
    subject: "Password Reset Successfully",
    html: RESET_PASSWORD_DONE_TEMPLATE.replace("{usernamereplacer}", username),
  };

  sendEmail(mailOptions);
}
