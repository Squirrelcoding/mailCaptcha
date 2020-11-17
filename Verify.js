var nodemailer = require('nodemailer');
var transporter = "";
var emaill = "";
var passwordd = "";
var mailOptionss = "";
var sent = false;
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
function randint(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
var code = randint(100000, 1000000);
exports.authentication = function authentication(email, password) {
transporter = nodemailer.createTransport({
  service: 'gmail',
  port: 587,
  secure: true,
  auth: {
    user: email,
    pass: password
  }
});
emaill = email
passwordd = password
}
exports.sendCode = function sendCode(target) {
  var mailOptions = {
    from: emaill,
    to: target,
    subject: 'Sending Email using Node.js',
    text: 'Here is the code: ' + code
  };
  transporter.sendMail(mailOptions, function(error){
    if (error) {
      console.log(error);
    }/* else {
      console.log('Email sent Successfuly!');
    }*/
  });
}
exports.verify = function verify(inputCode) {
  if (inputCode == code) {
    console.log("Verified!")
  }
  else {
    console.log('Incorrect code.')
}
}
