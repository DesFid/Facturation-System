const nodemailer = require('nodemailer');

const sendEmail = (req, res) => {
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            type: 'OAuth2',
            user: 'hombredehielosm@gmail.com',
            clientId: '682945914388-i68vo29bn1osvtm73rgju2c21u4erv5h.apps.googleusercontent.com',
            clientSecret: 'e0kh7hciDFNA5cDRQSeKY3jO',
            refreshToken: '1/CUAG6Zmrm5BfgemktSsuhYny7P_Ix1meBvxFfR-aD8cE6p7aC3awEua4JKj5gFlp',
            accessToken: 'ya29.GltdB-53phLWbLItcQNHLltRyxbXngZYIfbc8KSH27SRG_5Q3XqrruQeAqvkHNrxhfS7ZNoTgpmBfAbyaBEzkD_hWNqefOEMsp-2O2PcCAkiZPvvdRCni5eFPhsh'
        }
    });
    var mailOptions = {
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