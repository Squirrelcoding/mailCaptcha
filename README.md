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
Just add the `Verify.js` file, and enter the code:
```js
var verify = require('./verify.js') 
//Not published yet
```
**Require readline**
Require `readline` to use as input
 ```js
 const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
```
**Make the functions to see to deal with if the user entered the code in correctly**
These functions will be executed wether the user entered the code correctly or not
```js
function correct() {
  console.log('Verified!')
}
function incorrect() {
  console.log('Incorrect Code')
}
```
**Authorize ourselves with Google**
Go enable less secure apps [here](https://myaccount.google.com/u/1/lesssecureapps?pli=1&rapt=AEjHL4O5Q6vEvF1y1Mjg3JuVU_VP1TaUoGdovZpX-6vKFwhFR6FZBypztEYxFK21xAPmpoGVr2vbWwMgluP9npdP72XVpInavw) for this to work
```js
verify.authentication("Your Email", "Your Password");  /*REMEBER TO ENABLE LESS SECURE APPS*/
```
**Ask the user their Email, and send the code**
Use `readline` to ask the user for their email, to do this, use the `verify.sendCode` to send the code!
```js
rl.question("Enter your email:", ans => {
  verify.sendCode(ans)
}
```
**Ask the user to enter the code they recieved**
Here, we use `readline` to see if the user entred the code in correctly, then it will execute one of the 2 functions.
```js
rl.question("Enter your email:", ans => {
  verify.sendCode(ans)
  rl.question("Enter the Code we sent you :", ans => {
    verify.verify(ans, correct, incorrect)
  })
})
```
**Run the code and you are done!**

# Keywords
`verify.authentication(yourEmail, yourPassword)`

Use this code to authenticate the account that will send the code! To do this you must also turn off less secure apps [here](https://myaccount.google.com/u/1/lesssecureapps?pli=1&rapt=AEjHL4O5Q6vEvF1y1Mjg3JuVU_VP1TaUoGdovZpX-6vKFwhFR6FZBypztEYxFK21xAPmpoGVr2vbWwMgluP9npdP72XVpInavw).
================================================================
`verify.sendCode(target)`

Replace `target` with a valid email adress to send the code.

`verify.verify(Code, correct, incorrect)`
================================================================
Ok, so the computer will look at the `Code` paramter and check if it matches the code sent. The `correct` parameter is actually a function. if the code matches the code sent, then this function will get executed. Same thing for the `incorrect` function except that will get executed if the code sent does not match the one the user put in.