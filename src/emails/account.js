const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)
const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'sh@jn.io',
        subject: 'Welcome to our Team',
        text: `Thanks for joining our team, ${name}. Just go through the our Website.`
    })
}

const sendCancelEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'sh@jn.io',
        subject: 'Account Deleted',
        text: `Hi ${name}, Anything we can help you.`
    })
}
module.exports = {
    sendWelcomeEmail,
    sendCancelEmail
}