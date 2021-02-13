# mailCaptcha
mailCaptcha is a Nodejs library that helps people by using a captcha! Just install, learn, and code!

# how it works
So basically it uses Nodemailer and a random number generator to send a random 6 digit code to the user. **No, it does not send your passwords and account data to me!, *feel free to inspect the code!***

# Recent Updates - 1.0.3
- Added Support For Custom Subjects
- Added Support For HTML messages only!
# Upcoming Updates
- No upcoming updates, we could use some feedback in the `issues` section!
# Credits
- Me.

# How to use!
Almost forgot! So here is the how to use it:

**Install/require**

```js
var verify = require('@softsquirrel/mailcaptcha')
```
**Require readline**
Require `readline` to use as input, you can also use other methods of input besides `prompt` or `alert`, they will not work
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

# Functions
`verify.authentication(yourEmail, yourPassword)`

Use this code to authenticate the account that will send the code! To do this you must also turn off less secure apps [here](https://myaccount.google.com/u/1/lesssecureapps?pli=1&rapt=AEjHL4O5Q6vEvF1y1Mjg3JuVU_VP1TaUoGdovZpX-6vKFwhFR6FZBypztEYxFK21xAPmpoGVr2vbWwMgluP9npdP72XVpInavw).

================================================================

`verify.sendCode(target)`

Replace `target` with a valid email adress to send the code.

================================================================

`verify.verify(Code, correct, incorrect)`

Ok, so the computer will look at the `Code` paramter and check if it matches the code sent. The `correct` parameter is actually a function. if the code matches the code sent, then this function will get executed. Same thing for the `incorrect` function except that will get executed if the code sent does not match the one the user put in.


================================================================

`verify.createCode(customCode)`

Just replace the `customCode` parameter with a variable! Use it like this:
```js
verify.createCode("myCode") //Create the code
verify.verify(code) //Verifies the code! If you do not use the customCode function, it will just give you a random 6 digit code
```
================================================================

`verify.message(message)`

Now you can add custom messages! Here is how to use it:
```js
verify.message("Hello! Here is your verification code: --CODE--")
```

When the message is sent, it will replace `--CODE--` with the code! If you do not want a custom message, just dont call the `message` function! And we recently added HTML support! If you can, you can send an HTML file!

================================================================
`verify.subject(subject)`
Like the one above, this works the same Except its for email subjects! Just replace the *subject* parameter with your email subject! 
# Known Bugs

- No known bugs!

If you notice any bugs, report it to bugs! You can also send feedback in the `issues` section!


# [Our Website](https://www.softsquirrel.tk/)
