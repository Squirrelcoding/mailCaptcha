# easyCaptcha
easycaptcha is a Nodejs library that helps people by using a captcha.

# how it works
So basically it uses Nodemailer and a random number generator to send a random 6 digit code to the user. **No, it does not send your passwords and account data to me!, *feel free to inspect the code!***

# Upcoming Updates
- Adding support to `alert` and `prompt`

- Adding support for custom verification codes, instead of a 6 digit code you will be able to customize it!

# Credits
- Me.

Check it out on [repli.it](https://repl.it/@Squirrel777/Captcha#index.js)


# How to use!
Almost forgot! So here is the code:

**Install/require**
```js
var verify = require('./verify.js') 
//Not published yet
```
**Require readline**
 ```js
 const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
```
**Make the functions to see to deal with if the user entered the code in correctly**
```js
function correct() {
  console.log('Verified!')
}
function incorrect() {
  console.log('Incorrect Code')
}
```
**Authorize ourselves with Google**
```js
verify.authentication("Your Email", "Your Password");
```
**Ask the user their Email, and send the code**
```js
rl.question("Enter your email:", ans => {
  verify.sendCode(ans)
}
```
**Ask the user to enter the code they recieved**
```js
rl.question("Enter your email:", ans => {
  verify.sendCode(ans)
  rl.question("Enter the Code we sent you :", ans => {
    verify.verify(ans, correct, incorrect)
  })
})
```
**Run the code and you are done!**
