const nodemailer = require('nodemailer');
const { GMAIL } = require('./keys.js');
let transporter = nodemailer.createTransport({
    service: 'Gmail',
    secure: true,
    auth: GMAIL
});
module.exports = transporter;