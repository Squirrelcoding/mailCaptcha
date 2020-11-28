var verify = require('./mailCaptcha.js')
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
function correct() {
  console.log('Verified!')
}
function incorrect() {
  console.log('Incorrect Code')
}
var email = process.env.EMAIL;
var password = process.env.PASSWORD;
verify.authentication(email, password); //Alt account
rl.question("Enter your email:", ans => {
  verify.sendCode(ans)
  rl.question("Enter the Code we sent you :", ans => {
    verify.verify(ans, correct, incorrect)
  })
})
