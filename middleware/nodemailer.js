// middleware/nodemailer.js
const nodemailer = require("nodemailer");
require("dotenv").config();

const email = "mohammedbakhadher@gmail.com";

exports.transporter = nodemailer.createTransport({
  host: "smtp.forwardemail.net",

  secure: true,
  port: 465,
  auth: {
    user: email,
    pass: process.env.Email_Password,
  },
});
exports.email = email;
