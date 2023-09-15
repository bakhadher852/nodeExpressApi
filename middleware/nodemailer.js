// middleware/nodemailer.js
const nodemailer = require("nodemailer");
require("dotenv").config();

const email = "ai_ai852@hotmail.com";

exports.transporter = nodemailer.createTransport({
  host: "smtp.office365.com",
  service: "hotmail",
  secure: false,
  port: 587,
  auth: {
    user: email,
    pass: process.env.Email_Password,
  },
});
exports.email = email;
