import nodemailer from 'nodemailer';


function sendEmail(email,password){
var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'officialpawansw@gmail.com',
    pass: 'iszgeuoxrgyfflji'
  }
});

var mailOptions = {
  from: 'officialpawansw@gmail.com',
  to:email,
  subject: 'varification email tenders',
  html: '<h1>welcome to Tenders</h1><a>you have successfully registered to our application,your login credentials are attached below</a><h2>Username:+email+</h2><h2>password:+password+</h2>'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
}
export default sendEmail;