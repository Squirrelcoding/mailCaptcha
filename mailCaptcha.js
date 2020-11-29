/*
Copyright (c) 2020 Squirrelcoding
*/
var nodemailer = require('nodemailer');
var transporter = "";
var emaill = "";
var passwordd = "";
var mailOptionss = "";
var messageSenttt = "";
var sent = false;
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
function randint(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
var code = randint(100000, 1000000);
exports.createCode = function createCustomCode(customCode) {
   code = customCode
}
exports.message = function message(message) {
	var customMessage = message;
	var ifCodeIncluded = customMessage.includes("--CODE--");
	if (ifCodeIncluded == true) {
	customMessage = customMessage.replace("--CODE--", code);
	messageSenttt = customMessage;
	}
	else if (ifCodeIncluded == false) {
		console.log("You did not put the code in your message!")
	}
}
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
    subject: 'Your Verification Code',
    text: messageSenttt
  };
  transporter.sendMail(mailOptions, function(error){
    if (error) {
      console.log(error);
    }
  });
}
exports.verify = function verify(inputCode, ifCorrectFunction, ifIncorretFunction) {
  if (inputCode == code) {
   ifCorrectFunction();
  }
  else {
    ifIncorretFunction();
}
}
