const nodemailer = require('nodemailer');
const emailConfig = require('../../Constants/email_config');

const sendEmail = (req, res) => {
    let transporter = nodemailer.createTransport(emailConfig.gmailTransport);
    let mailOptions = {
        from: 'DesF <hombredehielosm@gmail.com>',
        to: 'adrian_reichell@hotmail.com',
        subject: 'Nodemailer test',
        text: 'WOrking!!!'
    };
    transporter.sendMail(mailOptions, function(err, res) {
        if (err)
            console.log('ERROR', err);
        else
            console.log('SENDED: ', res);
    })
}

module.exports = {sendEmail};