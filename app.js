const nodemailer = require('nodemailer');
const { User } = require('../models');
require('dotenv').config();

const transporter = nodemailer.createTransport({
    service: 'gmail',
    port: 993,
    auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASS,
    }
});


let body = {
    from: 'cuba289@gmail.com', // sender address
    to: 'user_email', // list of receivers
    subject: "Wussup bro", // Subject line
    text: "Yooo",
}
// send mail with defined transport object
 transporter.sendMail(body, (err, data) => {
    if(err) {
        console.log(err);
        return;
    } 
    console.log(data);
 })
