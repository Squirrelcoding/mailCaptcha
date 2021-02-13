var nodemailer = require("nodemailer"),
    transporter = "",
    emaill = "",
    passwordd = "",
    daSubject = "Your Verification Code",
    mailOptionss = "",
    messageSenttt = "",
    sent = !1;

function randint(e, t) {
    return Math.floor(Math.random() * (t - e)) + e
}
var code = randint(1e5, 1e6);
exports.createCode = function(e) {
    code = e
}, exports.message = function(e) {
    var t = e,
        o = t.includes("--CODE--");
    1 == o ? (t = t.replace("--CODE--", code), messageSenttt = t) : 0 == o && console.log("You did not put the code in your message!")
}, exports.authentication = function(e, t) {
    transporter = nodemailer.createTransport({
        service: "gmail",
        port: 587,
        secure: !0,
        auth: {
            user: e,
            pass: t
        }
    }), emaill = e, passwordd = t
}, exports.subject = function(e) {
    daSubject = e
}, exports.sendCode = function(e) {
    var t = {
        from: emaill,
        to: e,
        subject: daSubject,
        html: messageSenttt
    };
    transporter.sendMail(t, function(e) {
        e && console.log(e)
    })
}, exports.verify = function(e, t, o) {
    (e == code ? t : o)()
};
